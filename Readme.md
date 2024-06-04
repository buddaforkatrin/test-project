# Инициализация npm проекта

```bash
npm init -y
```

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

## Запуск тестов

Тестирование выполняется с использованием Jest. В \`index.spec.js\` содержатся все необходимые тесты для функции \`calculateBonus\`.

С использованием npm:

```bash
npm test
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

# Запуск тестов для проверки

```bash
npm test
```

## Покрытие кода

Проект использует Jest и Istanbul для измерения покрытия кода. Ниже приведены основные метрики покрытия:

- **Покрытие функций**: Измеряет процент функций, которые были вызваны хотя бы раз во время выполнения тестов.
- **Покрытие веток**: Измеряет процент выполненных ветвей (условных операторов) в коде.
- **Покрытие строк**: Измеряет процент строк кода, которые были выполнены.

Для запуска тестов и измерения покрытия используйте команду:

```bash
npx jest --coverage
```

### Что можно увидеть в отчете покрытия

После запуска команды `npx jest --coverage`, отчет будет сохранен в директории `coverage`. В отчете можно увидеть:

- **Покрытие по файлам**: Общая информация по каждому файлу.
- **Детализированный отчет**: Подробное покрытие для каждого файла, показывающее выполненные и невыполненные строки кода.
- **Покрытие функций, веток и строк**: Отдельные метрики для функций, веток и строк.
