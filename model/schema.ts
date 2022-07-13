export interface Category {
  id: string
  title: string
}

export interface Lesson {
  id: string
  title: string
  image: string
  author: string
  category: Category
  content: string
}
