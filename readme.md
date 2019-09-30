<pre>git clone https://github.com/uglegorsky/iBrush_test_layout.git</pre>

<ol>
	<li>Clone or <a href="https://github.com/uglegorsky/iBrush_test_layout/archive/master.zip">Download</a> repository from GitHub</li>
	<li>Install Node Modules: <strong>npm i</strong></li>
	<li>Run: <strong>gulp</strong></li>
</ol>

<h4>Комментарии к вёрстке</h4>
<p>Использован только один JavaScript плагин (основанный на библиотеке jQuery) <a href="https://github.com/tomhrtly/flexCarousel.js" target="_blank">flexCarousel.js</a> для селекторов.</p>
<p>Скролл-бар нативными средствами CSS не настроить согласно макету (хотя, есть селекторы для WebKit, но меня это, как пользователя Firefox, слегка огорчает), есть плагины на JS, не стал их подключать и настраивать, это бы противоречило ТЗ :) Но если нужно в точности как на макете - то это возможно (средствами JS).</p>
<p>Выбор книги в форме для отправки реализовал через select > option. Нативным CSS элемент option настраивается только через свойства color и font-size. В итоге, получить такую же картинку как на макете - можно, но если делать это выпающим списком через ul > li, но тут возникает вопрос доступности и отправки данных через форму. Остановился на более простом варианте, но если необходимо, это возможно переделать согласно макету.</p>

Based on HTML5 template <a href="https://github.com/agragregra/OptimizedHTML-5" target="_blank">OptimizedHTML-5
</a>


