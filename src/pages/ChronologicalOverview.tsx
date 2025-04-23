
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ChronologicalOverview = () => {
  const timelineItems = [
    {
      period: "Древнейший период",
      years: "до IX века",
      description: "Войны кочевых народов и ранних государственных образований",
      link: "/ancient-period"
    },
    {
      period: "Киевская Русь",
      years: "IX-XIII века",
      description: "Борьба с кочевниками и монгольское нашествие",
      link: "/kievan-rus"
    },
    {
      period: "Московское царство",
      years: "XIV-XVII века",
      description: "Расширение границ и борьба за независимость",
      link: "/moscow-kingdom"
    },
    {
      period: "Российская империя",
      years: "XVIII-начало XX века",
      description: "Войны за выход к морям и европейское влияние",
      link: "/russian-empire"
    },
    {
      period: "XX век",
      years: "1914-1999 годы",
      description: "Мировые войны и локальные конфликты",
      link: "/twentieth-century"
    },
    {
      period: "Современная Россия",
      years: "2000-наст. время",
      description: "Современные военные операции",
      link: "/modern-russia"
    }
  ];

  return (
    <Layout>
      <h1>Военные конфликты на территории России: Хронологический обзор</h1>
      <p className="text-lg text-muted-foreground mb-8">
        История военных столкновений от древнейших времен до современности
      </p>

      <div className="mb-8">
        <p>
          Территория современной России на протяжении тысячелетий была ареной многочисленных военных 
          конфликтов. Географическое положение на стыке Европы и Азии, обширные территории и природные 
          богатства делали эти земли объектом притязаний соседних народов и государств. В то же время, 
          народы, населявшие эту территорию, вели активную оборонительную и наступательную политику.
        </p>
        
        <p>
          Военная история России отражает сложный путь формирования государственности, отстаивания 
          независимости и расширения территорий. Хронологический обзор позволяет проследить эволюцию 
          военного дела, стратегии и тактики, а также оценить влияние военных конфликтов на развитие 
          государства и общества в различные исторические эпохи.
        </p>
      </div>

      <div className="space-y-6">
        {timelineItems.map((item, index) => (
          <Card key={index} className="relative overflow-hidden border-l-4 border-primary">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between">
                <span>{item.period}</span>
                <span className="text-muted-foreground text-sm font-normal">{item.years}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{item.description}</p>
              <Link 
                to={item.link} 
                className="text-primary font-medium hover:underline"
              >
                Подробнее →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Особенности военной истории России</h2>
        <ul className="list-disc pl-6">
          <li>Постоянная борьба на нескольких фронтах – западном, южном и восточном</li>
          <li>Сочетание оборонительных войн за выживание и экспансионистских кампаний</li>
          <li>Влияние природно-климатических факторов на ведение военных действий</li>
          <li>Особая роль мобилизационного потенциала государства и общества</li>
          <li>Взаимное влияние военных традиций Запада и Востока</li>
        </ul>
      </div>
    </Layout>
  );
};

export default ChronologicalOverview;
