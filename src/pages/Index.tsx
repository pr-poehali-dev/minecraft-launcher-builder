import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const minecraftVersions = [
  { id: '1.20.4', name: 'Minecraft 1.20.4', type: 'release', popular: true },
  { id: '1.20.1', name: 'Minecraft 1.20.1', type: 'release', popular: true },
  { id: '1.19.4', name: 'Minecraft 1.19.4', type: 'release', popular: false },
  { id: '1.19.2', name: 'Minecraft 1.19.2', type: 'release', popular: true },
  { id: '1.18.2', name: 'Minecraft 1.18.2', type: 'release', popular: false },
  { id: '1.16.5', name: 'Minecraft 1.16.5', type: 'release', popular: true },
  { id: '1.12.2', name: 'Minecraft 1.12.2', type: 'release', popular: true },
  { id: '1.8.9', name: 'Minecraft 1.8.9', type: 'release', popular: true },
];

const Index = () => {
  const [selectedVersion, setSelectedVersion] = useState('1.20.4');
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'modpacks', label: 'Модпаки', icon: 'Package' },
    { id: 'skins', label: 'Скины', icon: 'User' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'account', label: 'Аккаунт', icon: 'UserCircle' },
  ];

  return (
    <div className="min-h-screen bg-background flex overflow-hidden">
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ZxcvuierClient
          </h1>
          <p className="text-xs text-sidebar-foreground/60 mt-1">Minecraft Launcher v2.0</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg shadow-primary/20'
                  : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              }`}
            >
              <Icon name={item.icon as any} size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="User" size={20} className="text-background" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Player123</p>
              <p className="text-xs text-sidebar-foreground/60">Premium</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Icon name="Gamepad2" size={24} className="text-primary" />
            <h2 className="text-xl font-bold">Запуск игры</h2>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></span>
              Онлайн
            </Badge>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Bell" size={20} />
            </Button>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-background border border-primary/20 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMwZWZmOWYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="space-y-4">
                  <div className="inline-block">
                    <Badge className="bg-primary text-background font-bold px-4 py-1 text-sm">
                      Готов к запуску
                    </Badge>
                  </div>
                  <h3 className="text-4xl font-bold">Minecraft {selectedVersion}</h3>
                  <p className="text-muted-foreground text-sm max-w-2xl">
                    Выберите версию и запустите игру. Все необходимые файлы будут загружены автоматически.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>

            <Card className="p-6 bg-card border-border shadow-xl">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Выберите версию Minecraft
                  </label>
                  <Select value={selectedVersion} onValueChange={setSelectedVersion}>
                    <SelectTrigger className="h-14 text-lg border-2 border-border hover:border-primary/50 transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {minecraftVersions.map((version) => (
                        <SelectItem key={version.id} value={version.id} className="text-base py-3">
                          <div className="flex items-center justify-between w-full">
                            <span>{version.name}</span>
                            {version.popular && (
                              <Badge variant="secondary" className="ml-2 text-xs">
                                Популярная
                              </Badge>
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  size="lg" 
                  className="h-14 px-12 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-200"
                >
                  <Icon name="Play" size={24} className="mr-2" />
                  Играть
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 bg-card border-border hover:border-primary/30 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name="Download" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Быстрая установка</h4>
                    <p className="text-xs text-muted-foreground">Все файлы загружаются автоматически</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/30 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <Icon name="Zap" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Оптимизация</h4>
                    <p className="text-xs text-muted-foreground">Максимальная производительность</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/30 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Безопасность</h4>
                    <p className="text-xs text-muted-foreground">Защита аккаунта и данных</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-primary" />
                Популярные версии
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {minecraftVersions.filter(v => v.popular).map((version) => (
                  <button
                    key={version.id}
                    onClick={() => setSelectedVersion(version.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedVersion === version.id
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">🎮</div>
                      <p className="font-semibold text-sm">{version.id}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
