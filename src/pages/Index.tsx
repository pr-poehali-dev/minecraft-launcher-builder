import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    category: 'Бой',
    items: [
      { name: 'KillAura', desc: 'Автоматическая атака ближайших целей' },
      { name: 'Velocity', desc: 'Анти-откидывание от ударов' },
      { name: 'AutoTotem', desc: 'Автоматическое использование тотемов' },
      { name: 'Criticals', desc: 'Критические удары при каждой атаке' },
      { name: 'AutoPotion', desc: 'Автоматическое использование зелий' },
    ]
  },
  {
    category: 'Движение',
    items: [
      { name: 'Fly', desc: 'Полёт в креативе' },
      { name: 'Speed', desc: 'Ускоренное передвижение' },
      { name: 'Spider', desc: 'Лазание по стенам' },
      { name: 'Jesus', desc: 'Хождение по воде' },
      { name: 'NoFall', desc: 'Отключение урона от падения' },
    ]
  },
  {
    category: 'Визуал',
    items: [
      { name: 'ESP', desc: 'Подсветка игроков и мобов через стены' },
      { name: 'Tracers', desc: 'Линии к сущностям' },
      { name: 'FullBright', desc: 'Полная яркость в темноте' },
      { name: 'NameTags', desc: 'Улучшенные никнеймы игроков' },
      { name: 'ChestESP', desc: 'Подсветка сундуков и хранилищ' },
    ]
  },
  {
    category: 'Другое',
    items: [
      { name: 'X-Ray', desc: 'Просвечивание блоков для поиска руды' },
      { name: 'Freecam', desc: 'Свободная камера от персонажа' },
      { name: 'NoRender', desc: 'Отключение лишнего рендера для FPS' },
      { name: 'ClickGUI', desc: 'Удобное графическое меню настроек' },
    ]
  }
];

const Index = () => {
  const handleDownload = () => {
    window.open('https://file.kiwi/ed8b27fa#tvHMppyqLU99cMz2AAn3uA', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMwZWZmOWYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative">
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-background" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ZxcvuierClient
                </h1>
                <p className="text-xs text-muted-foreground">Minecraft 1.16.5 Cheat Client</p>
              </div>
            </div>
            <Button onClick={handleDownload} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/30">
              <Icon name="Download" size={18} className="mr-2" />
              Скачать
            </Button>
          </div>
        </header>

        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1">
              Minecraft 1.16.5
            </Badge>
            
            <h2 className="text-6xl font-bold leading-tight">
              Доминируй на сервере с{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                ZxcvuierClient
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощный чит-клиент для Minecraft с широким набором функций. Обходит большинство античитов и дает полное преимущество в PvP.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="h-14 px-8 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
              >
                <Icon name="Download" size={24} className="mr-2" />
                Скачать ZxcvuierClient
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-lg border-2 border-primary/30 hover:bg-primary/10"
              >
                <Icon name="BookOpen" size={24} className="mr-2" />
                Инструкция
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
              <Card className="p-4 bg-card/50 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Функций</div>
              </Card>
              <Card className="p-4 bg-card/50 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">Bypass</div>
                <div className="text-sm text-muted-foreground">Античиты</div>
              </Card>
              <Card className="p-4 bg-card/50 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">ClickGUI</div>
                <div className="text-sm text-muted-foreground">Удобный интерфейс</div>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Возможности клиента</h3>
            <p className="text-muted-foreground text-lg">Полный арсенал для доминирования в Minecraft</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((category, idx) => (
              <Card key={idx} className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="Sparkles" size={20} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">{category.category}</h4>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-primary/30">
            <div className="text-center space-y-6">
              <Icon name="Rocket" size={48} className="text-primary mx-auto" />
              <h3 className="text-3xl font-bold">Как установить?</h3>
              <div className="text-left max-w-2xl mx-auto space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold mb-1">Скачайте ZxcvuierClient</div>
                    <div className="text-sm text-muted-foreground">Нажмите на кнопку "Скачать" выше</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold mb-1">Установите Forge 1.16.5</div>
                    <div className="text-sm text-muted-foreground">Если еще не установлен - скачайте с официального сайта Forge</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold mb-1">Переместите файл в папку mods</div>
                    <div className="text-sm text-muted-foreground">Windows: %appdata%\.minecraft\mods</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold mb-1">Запустите Minecraft</div>
                    <div className="text-sm text-muted-foreground">Выберите профиль Forge 1.16.5 и наслаждайтесь игрой!</div>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/30"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать сейчас
              </Button>
            </div>
          </Card>
        </section>

        <footer className="border-t border-border/50 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Zap" size={18} className="text-background" />
                </div>
                <div>
                  <div className="font-bold text-sm">ZxcvuierClient</div>
                  <div className="text-xs text-muted-foreground">Minecraft Cheat Client</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Только для образовательных целей
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
