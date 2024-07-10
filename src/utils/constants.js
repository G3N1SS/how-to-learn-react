import card1 from '../images/cards-attention.png'
import card2 from '../images/cards-recall.png'
import card3 from '../images/cards-interliving.png'
import card4 from '../images/cards-question.png'
import card5 from '../images/cards-competence.png'

import arzamas from '../images/resources-arzamas.svg'
import n1 from '../images/resources-n1.svg'
import strelka from '../images/resources-strelka.svg'
import polka from '../images/resources-polka.svg'

const techniques = [
  {
    name: 'Два вида внимания',
    link: card1,
    description: 'Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.'
  },
  {
    name: 'Recall',
    link: card2,
    description: 'Вспоминайте изученное — это позволит соединить разрозненные порции памяти.'
  },
  {
    name: 'Интерливинг',
    link: card3,
    description: 'Изучайте несколько навыков одновременно, они обогащают друг друга.'
  },
  {
    name: 'Вопросы',
    link: card4,
    description: 'Слушая преподавателя, придумывайте хороший вопрос, который вас действительно волнует.'
  },
  {
    name: 'Иллюзия компетентности',
    link: card5,
    description: 'Повторите про себя, запишите, расскажите другу: вам только кажется, что вы владеете новой темой.'
  },
  {
    name: ' ',
    link: ' ',
    description: ' '
  }
]
const facts = [
  {
    name: '86 миллиардов',
    description: 'Число нейронов в мозге человека'
  },
  {
    name: '2.1 миллиарда',
    description: 'Число нуждающихся в повышении квалификации',
    author: 'Всемирный Банк, 2017'
  },
  {
    name: '1000 терабайт',
    description: 'Объём памяти человека'
  },
  {
    name: '500 триллионов',
    description: 'Число ответственных за обучение нервных синапсов у взрослого человека'
  },
  {
    name: '420 миллионов',
    description: 'Число взрослых людей моложе 25 лет, не имеющих образования для трудоустройства',
    author: 'Всемирный Банк, 2017'
  },
  {
    name: '17–20 лет',
    description: 'Пик обучаемости'
  },
  {
    name: '1885 год',
    description: 'Открытие кривой забывания'
  },
  {
    name: '1889 год',
    description: 'Открытие условного рефлекса'
  }
]

const list = [
  {
    name: '1',
    description: 'Выберите привлекательный проект.'
  },
  {
    name: '2',
    description: 'Сосредоточьтесь на каком-то одном навыке.',
  },
  {
    name: '3',
    description: 'Определите целевой уровень мастерства'
  },
  {
    name: '4',
    description: 'Разбейте навык на элементы.'
  },
  {
    name: '5',
    description: 'Приготовьте всё необходимое для занятий.',
  },
  {
    name: '6',
    description: 'Устраните препятствия для занятий.'
  },
  {
    name: '7',
    description: 'Выделите специальное время для занятий.'
  },
  {
    name: '8',
    description: 'Создайте быстрые петли обратной связи.'
  },
  {
    name: '9',
    description: 'Занимайтесь по расписанию, короткими интенсивными интервалами.'
  },
  {
    name: '10',
    description: 'Уделяйте внимание количеству и скорости.'
  }
]

const resources =[
  {
    name: 'Арзамас',
    src: arzamas,
    link: 'https://arzamas.academy/'
  },
  {
    name: 'Н1',
    src: n1,
    link: 'https://nplus1.ru/'
  },
  {
    name: 'Стрелка',
    src: strelka,
    link: 'https://www.youtube.com/@StrelkaInstitute'
  },
  {
    name: 'Полка',
    src: polka,
    link: 'https://polka.academy/'
  },
]

export {techniques, facts, list, resources};