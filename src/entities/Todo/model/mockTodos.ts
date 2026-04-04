import type {TodoType} from './todoType.ts'


export const mockTodos: TodoType [] = 
[
  {
    "_id": "1",
    "title": "Изучить требования к операционной среде",
    "order": 1,
    "completed": false,
    "description": "Разобраться с понятием и примерами для системного анализа",
    "createdAt": "2026-04-04T09:00:00Z",
    "updatedAt": "2026-04-04T09:00:00Z"
  },
  {
    "_id": "2",
    "title": "Подготовить описание API",
    "order": 2,
    "completed": false,
    "description": "Сформировать структуру endpoint'ов и их параметров",
    "createdAt": "2026-04-04T09:10:00Z",
    "updatedAt": "2026-04-04T09:10:00Z"
  },
  {
    "_id": "3",
    "title": "Провести анализ бизнес-процесса",
    "order": 3,
    "completed": true,
    "description": "Смоделировать текущий процесс и выявить узкие места",
    "createdAt": "2026-04-04T09:20:00Z",
    "updatedAt": "2026-04-04T10:00:00Z"
  },
  {
    "_id": "4",
    "title": "Составить user stories",
    "order": 4,
    "completed": false,
    "description": "Описать основные сценарии использования системы",
    "createdAt": "2026-04-04T09:30:00Z",
    "updatedAt": "2026-04-04T09:30:00Z"
  },
  {
    "_id": "5",
    "title": "Проверить требования на полноту",
    "order": 5,
    "completed": false,
    "description": "Убедиться, что нет пропущенных сценариев и требований",
    "createdAt": "2026-04-04T09:40:00Z",
    "updatedAt": "2026-04-04T09:40:00Z"
  }
]