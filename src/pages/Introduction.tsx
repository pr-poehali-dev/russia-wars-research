
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Introduction = () => {
  return (
    <Layout>
      <h1>Введение</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Комплексный анализ военной истории России и её влияния на формирование государства
      </p>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2>Актуальность темы</h2>
          <p>
            Военная история России представляет собой обширное поле для исследований, актуальность которых обусловлена 
            несколькими факторами. Во-первых, изучение военных конфликтов позволяет глубже понять процессы формирования 
            российской государственности, территориальной целостности и национальной идентичности. Во-вторых, анализ 
            военного прошлого помогает осмыслить современные геополитические вызовы и прогнозировать возможные сценарии 
            развития международных отношений с участием России.
          </p>
          <p>
            Особую значимость приобретает исследование опыта военных конфликтов в контексте современных вызовов 
            безопасности, таких как международный терроризм, локальные конфликты, информационные и гибридные войны. 
            Историческая память о войнах остается одним из ключевых элементов национального самосознания и играет 
            важную роль в формировании государственной политики в области обороны и безопасности.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2>Цель и задачи проекта</h2>
          <p>
            <strong>Цель проекта:</strong> провести комплексный анализ военных конфликтов на территории России 
            с древнейших времен до современности, выявить их причины, закономерности и влияние на развитие российского 
            государства и общества.
          </p>
          
          <h3>Основные задачи:</h3>
          <ul className="list-disc pl-6">
            <li>Составление хронологии основных военных конфликтов на территории России</li>
            <li>Анализ геополитических, экономических, идеологических и религиозных факторов, приводивших к войнам</li>
            <li>Исследование влияния военных конфликтов на территориальные изменения, демографию, экономику и 
              политическое устройство России</li>
            <li>Выявление исторических закономерностей в развитии военных конфликтов и их последствиях</li>
            <li>Формирование целостного представления о роли военного фактора в истории России</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2>Методология исследования</h2>
          <p>
            В основу методологии проекта положен комплексный подход, сочетающий исторический, системный и 
            сравнительный методы исследования. Хронологический принцип позволяет проследить эволюцию военных 
            конфликтов на территории России, выявить их общие черты и особенности в различные исторические периоды.
          </p>
          
          <p>
            Системный метод применяется для анализа взаимосвязи военных конфликтов с политическими, экономическими, 
            социальными и культурными процессами в российском обществе. Сравнительный метод используется при 
            сопоставлении различных войн, их причин, характера и последствий.
          </p>
          
          <p>
            Источниковая база исследования включает исторические документы, мемуары, статистические данные, 
            научные публикации отечественных и зарубежных исследователей, материалы периодической печати и 
            интернет-ресурсов. Особое внимание уделяется критическому анализу источников и объективной оценке 
            исторических событий с учетом различных точек зрения.
          </p>
        </CardContent>
      </Card>

      <div className="mt-6 text-sm text-muted-foreground">
        <Separator className="my-4" />
        <p>
          Данный проект представляет собой научно-исследовательскую работу, направленную на объективное освещение 
          военной истории России. Автор стремится к беспристрастному анализу исторических событий, избегая 
          политизированных оценок и следуя принципам научной объективности.
        </p>
      </div>
    </Layout>
  );
};

export default Introduction;
