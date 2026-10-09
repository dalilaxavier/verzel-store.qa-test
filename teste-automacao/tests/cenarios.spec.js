import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');
});

test('Aplicar cupom "BEMVINDO10" com sucesso', async ({ page }) => {

    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();

    await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

    await page.getByRole('textbox', { name: 'Cupom de desconto' }).fill('BEMVINDO10');

    await page.getByRole('button', { name: 'Aplicar cupom' }).click();

    // Valida que o cupom foi aplicado
    await expect(page.getByText('Cupom BEMVINDO10 aplicado.')).toBeVisible();

    // Obtém os valores apresentados pela aplicação
    const subtotalTexto = await page.locator('[data-valor="subtotal"]').textContent();

    const descontoTexto = await page.locator('[data-valor="desconto"]').textContent();

    const freteTexto = await page.locator('[data-valor="frete"]').textContent();

    // Converte os valores para números
    const subtotal = Number(
        subtotalTexto
            .replace('R$', '')
            .replace('.', '')
            .replace(',', '.')
            .trim()
    );

    const desconto = Number(
        descontoTexto
            .replace('R$', '')
            .replace(',', '.')
            .replace('-', '')
            .trim()
    );

    const frete = Number(
        freteTexto
            .replace('R$', '')
            .replace('.', '')
            .replace(',', '.')
            .trim()
    );

    // Subtotal esperado
    expect(subtotal).toBe(59.90);

    // Valida que o desconto corresponde a 10% do subtotal
    expect(desconto).toBeCloseTo(subtotal * 0.10, 2);

});

test('Aplicar cupom expirado', async ({ page }) => {

    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();

    await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

    await page.getByRole('textbox', { name: 'Cupom de desconto' }).fill('VERAO2026');

    await page.getByRole('button', { name: 'Aplicar cupom' }).click();

    // Valida que o cupom está expirado
    await expect(page.getByText('Cupom expirado.')).toBeVisible();

    // Valida o valor do desconto
    await expect(page.locator('[data-valor="desconto"]')).toHaveText('R$ 0,00');
});

test('Conceder frete grátis para subtotal acima de R$ 200,00', async ({ page }) => {

    await page.getByRole('article', { name: 'Kit 3 Pares de Meias' }).getByRole('button').click({ clickCount: 5 });

    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();

    await page.getByRole('link', { name: 'Carrinho 6 itens no carrinho' }).click();

    // Verificar o subtotal
    await expect(page.locator('[data-valor="subtotal"]')).toHaveText("R$ 209,40");

    // Valida que o frete é grátis
    await expect(page.locator('[data-valor="frete"]')).toHaveText("Grátis");

    // Valida o valor do total
    await await expect(page.locator('[data-valor="total"]')).toHaveText('R$ 209,40');
});