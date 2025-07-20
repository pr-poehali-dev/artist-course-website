import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      category: "Акварель",
      levels: [
        { name: "Начинающий", description: "Основы акварельной техники", price: "5,000₽", duration: "4 недели" },
        { name: "Продвинутый", description: "Сложные техники и композиция", price: "7,500₽", duration: "6 недель" },
        { name: "Мастер", description: "Профессиональное мастерство", price: "12,000₽", duration: "8 недель" }
      ]
    },
    {
      category: "Масло",
      levels: [
        { name: "Начинающий", description: "Знакомство с масляными красками", price: "6,000₽", duration: "5 недель" },
        { name: "Продвинутый", description: "Портреты и пейзажи маслом", price: "9,000₽", duration: "7 недель" },
        { name: "Мастер", description: "Авторская техника и стиль", price: "15,000₽", duration: "10 недель" }
      ]
    },
    {
      category: "Графика",
      levels: [
        { name: "Начинающий", description: "Карандаш и основы рисунка", price: "4,000₽", duration: "3 недели" },
        { name: "Продвинутый", description: "Тушь, уголь, пастель", price: "6,500₽", duration: "5 недель" },
        { name: "Мастер", description: "Профессиональная иллюстрация", price: "10,000₽", duration: "7 недель" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Благодаря курсам я открыла в себе художника! Теперь рисую каждый день и участвую в выставках.",
      course: "Акварель, Мастер"
    },
    {
      name: "Михаил Сидоров", 
      text: "Отличная программа обучения. За 3 месяца научился писать маслом с нуля до уверенного уровня.",
      course: "Масло, Продвинутый"
    },
    {
      name: "Елена Иванова",
      text: "Преподаватель объясняет очень доступно. Графика стала моим любимым направлением!",
      course: "Графика, Начинающий"
    }
  ];

  const blogPosts = [
    {
      title: "10 секретов акварельной живописи",
      excerpt: "Узнайте профессиональные приемы работы с акварелью",
      date: "15 июля 2025"
    },
    {
      title: "Как выбрать кисти для масляной живописи",
      excerpt: "Подробный гид по выбору инструментов художника",
      date: "10 июля 2025"
    },
    {
      title: "История графического искусства",
      excerpt: "От древних рисунков до современной иллюстрации",
      date: "5 июля 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-art-pink to-art-purple text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
                Арт Студия
              </h1>
              <p className="text-xl font-open-sans font-light">
                Откройте мир искусства через профессиональные курсы рисования. 
                Три направления, три уровня, безграничные возможности для творчества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-art-purple hover:bg-gray-100 font-open-sans font-semibold">
                  Выбрать курс
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-art-purple font-open-sans">
                  Бесплатный урок
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1d737e2a-c32e-46b6-b2f5-b5b95a4395e5.jpg" 
                alt="Художественная студия" 
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-art-purple" size={24} />
                  <div>
                    <p className="font-open-sans font-semibold text-gray-800">500+ учеников</p>
                    <p className="text-sm text-gray-600">уже с нами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Наши курсы
            </h2>
            <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
              Выберите свое направление и уровень подготовки. Каждый курс разработан профессиональными художниками.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((courseCategory, idx) => (
              <div key={idx} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                    {courseCategory.category}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-art-pink to-art-purple mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  {courseCategory.levels.map((level, levelIdx) => (
                    <Card key={levelIdx} className="hover-scale transition-all duration-300 hover:shadow-lg border-l-4 border-l-art-pink">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="font-open-sans font-semibold text-lg">
                              {level.name}
                            </CardTitle>
                            <CardDescription className="font-open-sans text-sm mt-1">
                              {level.description}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="bg-art-pink/10 text-art-pink">
                            {level.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-playfair font-bold text-art-purple">
                            {level.price}
                          </span>
                          <Button className="bg-gradient-to-r from-art-pink to-art-purple hover:shadow-lg">
                            Записаться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Отзывы учеников
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Истории успеха наших художников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover-scale bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon name="Quote" className="text-art-purple mb-3" size={32} />
                    <p className="font-open-sans text-gray-700 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-playfair font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-art-purple font-open-sans">
                      {testimonial.course}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Блог об искусстве
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Полезные статьи и советы для художников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="hover-scale cursor-pointer group">
                <CardHeader>
                  <CardTitle className="font-playfair group-hover:text-art-purple transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 font-open-sans">
                      {post.date}
                    </span>
                    <Icon name="ArrowRight" className="text-art-purple group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-art-purple to-art-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Готовы начать творческий путь?
          </h2>
          <p className="text-xl font-open-sans font-light mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатный пробный урок или свяжитесь с нами для консультации
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-3">
              <Icon name="Phone" size={24} />
              <span className="font-open-sans">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Mail" size={24} />
              <span className="font-open-sans">info@art-studio.ru</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="MapPin" size={24} />
              <span className="font-open-sans">Москва, ул. Художников, 15</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-art-purple hover:bg-gray-100 font-open-sans font-semibold">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на урок
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-art-purple font-open-sans">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;