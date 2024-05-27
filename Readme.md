# Создание структуры проекта

```bash
mkdir calculate-bonus-project
cd calculate-bonus-project
```

# Инициализация npm проекта

```bash
npm init -y
```

# Установка Jest для тестирования

```bash
npm install --save-dev jest
```

# Создание файла index.js с реализацией функции calculateBonus

```bash
cat <<EOL > index.js
const calculateBonus = (a, b) => {
let bonus;
const sum = a + b;
sum > 50 ? (bonus = 50) : (bonus = sum);
return bonus;
};

module.exports = calculateBonus;
EOL
```

# Создание файла index.spec.js с тестами для функции calculateBonus

```bash
cat <<EOL > index.spec.js
const calculateBonus = require('./index');

test('sum of a and b is greater than 50', () => {
expect(calculateBonus(30, 25)).toBe(50);
expect(calculateBonus(50, 1)).toBe(50);
expect(calculateBonus(100, 100)).toBe(50);
});

test('sum of a and b is equal to 50', () => {
expect(calculateBonus(25, 25)).toBe(50);
expect(calculateBonus(30, 20)).toBe(50);
});

test('sum of a and b is less than 50', () => {
expect(calculateBonus(10, 20)).toBe(30);
expect(calculateBonus(0, 0)).toBe(0);
expect(calculateBonus(15, 10)).toBe(25);
expect(calculateBonus(-10, 30)).toBe(20);
});

test('one or both inputs are negative, but sum is less than 50', () => {
expect(calculateBonus(-10, 20)).toBe(10);
expect(calculateBonus(-25, 40)).toBe(15);
expect(calculateBonus(-50, 50)).toBe(0);
});

test('sum of a and b is exactly zero', () => {
expect(calculateBonus(0, 0)).toBe(0);
expect(calculateBonus(25, -25)).toBe(0);
expect(calculateBonus(-50, 50)).toBe(0);
});
EOL
```

# Добавление скрипта для запуска тестов в package.json

```bash
npx json -I -f package.json -e 'this.scripts.test="jest"'
```

# Создание файла README.md с инструкциями

```bash
cat <<EOL > README.md
```

# Calculate Bonus Project

## Описание

Этот проект включает функцию \`calculateBonus\`, которая рассчитывает бонус на основе суммы двух чисел. Если сумма больше 50, бонус устанавливается на 50, в противном случае бонус равен сумме.

## Структура проекта

```bash
.
├── index.js
├── index.spec.js
├── package.json
└── README.md
```

- `index.js`: Содержит реализацию функции `calculateBonus`.
- `index.spec.js`: Содержит набор тестов для функции `calculateBonus\ с использованием Jest.
- `package.json`: Конфигурационный файл npm, содержащий зависимости и скрипты для проекта.
- `README.md`: Текущее руководство.

## Установка

Для установки необходимых зависимостей вам понадобится Node.js и npm (или Yarn).

1. Клонируйте репозиторий:

```bash
git clone <URL вашего репозитория>
cd <название вашего репозитория>
```

2. Установите зависимости:

С использованием npm:

```bash
npm install
```

Или с использованием Yarn:

```bash
yarn install
```

## Запуск проекта

1. Убедитесь, что файл \`index.js\` содержит следующую функцию:

```javascript
const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  return bonus;
};

module.exports = calculateBonus;
```

2. Запуск основного кода (если это необходимо, например, для тестирования в консоли):

```bash
node index.js
```

## Запуск тестов

Тестирование выполняется с использованием Jest. В \`index.spec.js\` содержатся все необходимые тесты для функции \`calculateBonus\`.

1. Добавьте скрипт для запуска тестов в ваш \`package.json\`:

```json
"scripts": {
  "test": "jest"
}
```

2. Запустите тесты:

С использованием npm:

```bash
npm test
```

Или с использованием Yarn:

```bash
yarn test
```

## Описание тестов

Файл \`index.spec.js\` содержит следующие тесты:

1. **Тесты для суммы, превышающей 50**:

   - Проверяет, что если сумма двух чисел больше 50, функция возвращает 50.

2. **Тесты для суммы, равной 50**:

   - Проверяет, что если сумма двух чисел равна 50, функция возвращает 50.

3. **Тесты для суммы, меньшей 50**:

   - Проверяет, что если сумма двух чисел меньше 50, функция возвращает эту сумму.

4. **Тесты с отрицательными числами, сумма которых меньше 50**:

   - Проверяет, что функция правильно обрабатывает отрицательные числа, если их сумма меньше 50.

5. **Тесты для суммы, равной нулю**:
   - Проверяет, что если сумма двух чисел равна нулю, функция возвращает 0.

## Вклад

Если вы хотите внести свой вклад в проект, создайте форк репозитория, внесите свои изменения и отправьте pull request.

## Лицензия

Этот проект лицензирован под лицензией MIT. Для получения подробной информации см. файл \`LICENSE\`.
EOL

# Запуск тестов для проверки

```bash
npm test
```
