import React from 'react';

export default class Bredik extends React.Component {
    render() {
        return (
            <div className="portfolio-item">
                <h1 className="portfolio-item__title">
                    Bredik
                </h1>
                <p>Проект со сложной судьбой.</p>
                <p>
                    Начинали разрабатывать три человека, мой вклад на том этапе был - бэкэнд
                    на Node.js и сама идея, которая заключалась в представлении готовых бесплатных модулей которые
                    можно брать и использовать на сайтах как готовые модули для CMS, так и просто чистая верстка. Цель у
                    этой идеи была простая - практика для нас, начинающих программистов, и возможно в будущем некая база
                    бесплатных модулей.
                </p>
                <p>
                    У всех появились дела, я остался один на один с этой идеей. Она трансформировалась в другую:
                    я уже работал над реальными проектами и появлялись интересные ситуации о которых хотелось где-то
                    поделиться. Конечно можно было бы писать на готовые платформы, но не хотелось забрасывать первое
                    серьезное
                    детище, хотелось довести до ума. На данный момент оно существует только на локальном веб-сервере с
                    исходниками на гите и представляет из себя простенький бэк на php и фронт на реакте.
                </p>
                {/*<a href="http://bredik.space/" target="_blank">http://bredik.space</a>*/}
                <p>
                    Исходник на <a href="https://github.com/Tskon/Bredik" target="_blank">github
                    <img src="img/svg/github.svg" alt="github" title="github" className="portfolio-item__git-img"/></a>
                </p>
                <div>
                    <h2>Технологии:</h2>
                    <div className="portfolio-item__row">
                        <ul>
                            <b>BackEnd (первый)</b><br/>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Passport</li>
                            <li>MySQL</li>
                        </ul>
                        <ul>
                            <b>FrontEnd</b><br/>
                            <li>JavaScript (es6)</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>SCSS</li>
                        </ul>
                        <ul>
                            <b>Cборка</b><br/>
                            <li>Webpack 3</li>
                            <li>Babel</li>
                            <li>PostCSS(autoprefixer)</li>
                        </ul>
                    </div>
                    <h2>Мой вклад:</h2>
                    <div className="portfolio-item__list_center">
                        <ul>
                            <li>Организация процесса разработки</li>
                            <li>Создание и разработка архитектуры</li>
                            <li>Backend</li>
                            <li>
                                FrontEnd
                                <ul>
                                    <li>Перевод верстки на React</li>
                                    <li>React router + его синхронизация с BackEnd</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <b>Реализовано в первой версии:</b>
                    <p>
                        Авторизация через Goggle, полноценный реакт-роутинг
                        (и на клиенте и на сервере).
                    </p>
                    <b>Ближайшие планы:</b>
                    <p>
                        Переверстать фронт, добавить в админку возможность добавлять статьи (на данном этапе они
                        автоматически подхватываются из файлов в соответствующей директории).
                    </p>
                </div>
            </div>
        )
    }
}