import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import AboutUs from '@/pages/about-us/about-us'
import MeetDrRallis from '@/pages/meet-dr-rallis/meet-dr-rallis'
import MeetDrBonilla from '@/pages/meet-dr-bonilla/meet-dr-bonilla'
import MeetTheStaff from '@/pages/meet-the-staff/meet-the-staff'
import WhyChooseUs from '@/pages/why-choose-us/why-choose-us'
import TreatmentOptions from '@/pages/treatment-options/treatment-options'
import OfficeTour from '@/pages/office-tour/office-tour'
import Testimonials from '@/pages/testimonials/testimonials'
import PatientForms from '@/pages/patient-forms/patient-forms'
import OnlineServices from '@/pages/online-services/online-services'
import LifeWithBraces from '@/pages/life-with-braces/life-with-braces'
import BrushingAndFlossing from '@/pages/brushing-and-flossing/brushing-and-flossing'
import OrthodonticFaqs from '@/pages/orthodontic-faqs/orthodontic-faqs'
import SelfLigatingBraces from '@/pages/self-ligating-braces/self-ligating-braces'
import ClearBraces from '@/pages/clear-braces/clear-braces'
import ClearAligners from '@/pages/clear-aligners/clear-aligners'
import PalatalExpander from '@/pages/palatal-expander/palatal-expander'
import RetainerInstructions from '@/pages/retainer-instructions/retainer-instructions'
import EmergencyCare from '@/pages/emergency-care/emergency-care'
import ForAllAges from '@/pages/for-all-ages/for-all-ages'
import CommonOrthodonticIssues from '@/pages/common-orthodontic-issues/common-orthodontic-issues'
import SurgicalOrthodontics from '@/pages/surgical-orthodontics/surgical-orthodontics'
import Invisalign from '@/pages/invisalign/invisalign'
import InvisalignTeen from '@/pages/invisalign-teen/invisalign-teen'
import Forsus from '@/pages/forsus/forsus'
import ICat from '@/pages/i-cat/i-cat'
import AcceledentAura from '@/pages/acceledent-aura/acceledent-aura'
import SuresmileInfo from '@/pages/suresmile-info/suresmile-info'
import SuresmileFaqs from '@/pages/suresmile-faqs/suresmile-faqs'
import HowSuresmileWorks from '@/pages/how-suresmile-works/how-suresmile-works'
import SuresmileComparison from '@/pages/suresmile-comparison/suresmile-comparison'
import SuresmileBeforeandAfter from '@/pages/suresmile-before-and-after/suresmile-before-and-after'
import TheSuresmileProcess from '@/pages/the-suresmile-process/the-suresmile-process'
import SuresmileTestimonials from '@/pages/suresmile-testimonials/suresmile-testimonials'
import NorthStarOffice from '@/pages/north-star-office/north-star-office'
import EastOffice from '@/pages/east-office/east-office'
import AppointmentRequest from '@/pages/appointment-request/appointment-request'
import PostAppointmentSurvey from '@/pages/post-appointment-survey/post-appointment-survey'
import ReferaFriend from '@/pages/refer-a-friend/refer-a-friend'
import AppointmentThankYou from '@/pages/appointment-thank-you/appointment-thank-you'
import ReferaFfriendThankYou from '@/pages/refer-a-friend-thank-you/refer-a-friend-thank-you'
import PostAppointmentThankYou from '@/pages/post-appointment-thank-you/post-appointment-thank-you'
import Contact from '@/pages/contact-us/contact-us'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'
import Styleguide from '@/styleguide/styleguide'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: true,
      component: Home
    },
    {
      path: '/about-us',
      name: 'About Us',
      navigation: true,
      component: AboutUs
    },
    {
      path: '/meet-dr-rallis',
      name: 'meet dr rallis',
      navigation: true,
      component: MeetDrRallis
    },
    {
      path: '/meet-dr-bonilla',
      name: 'meet dr bonilla',
      navigation: true,
      component: MeetDrBonilla
    },
    {
      path: '/meet-the-staff',
      name: 'meet the staff',
      navigation: true,
      component: MeetTheStaff
    },
    {
      path: '/why-choose-us',
      name: 'why choose us',
      navigation: true,
      component: WhyChooseUs
    },
    {
      path: '/treatment-options',
      name: 'treatment options',
      navigation: true,
      component: TreatmentOptions
    },
    {
      path: '/office-tour',
      name: 'office tour',
      navigation: true,
      component: OfficeTour
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      navigation: true,
      component: Testimonials
    },
    {
      path: '/patient-forms',
      name: 'patient forms',
      navigation: true,
      component: PatientForms
    },
    {
      path: '/online-services',
      name: 'online services',
      navigation: true,
      component: OnlineServices
    },
    {
      path: '/life-with-braces',
      name: 'life with braces',
      navigation: true,
      component: LifeWithBraces
    },
    {
      path: '/brushing-and-flossing',
      name: 'brushing and flossing',
      navigation: true,
      component: BrushingAndFlossing
    },
    {
      path: '/orthodontic-faqs',
      name: 'orthodontic faqs',
      navigation: true,
      component: OrthodonticFaqs
    },
    {
      path: '/self-ligating-braces',
      name: 'self ligating braces',
      navigation: true,
      component: SelfLigatingBraces
    },
    {
      path: '/clear-braces',
      name: 'clear braces',
      navigation: true,
      component: ClearBraces
    },
    {
      path: '/clear-aligners',
      name: 'clear aligners',
      navigation: true,
      component: ClearAligners
    },
    {
      path: '/palatal-expander',
      name: 'palatal expander',
      navigation: true,
      component: PalatalExpander
    },
    {
      path: '/retainer-instructions',
      name: 'retainer instructions',
      navigation: true,
      component: RetainerInstructions
    },
    {
      path: '/emergency-care',
      name: 'emergency care',
      navigation: true,
      component: EmergencyCare
    },
    {
      path: '/for-all-ages',
      name: 'for all ages',
      navigation: true,
      component: ForAllAges
    },
    {
      path: '/common-orthodontic-issues',
      name: 'common-orthodontic-issues',
      navigation: true,
      component: CommonOrthodonticIssues
    },
    {
      path: '/surgical-orthodontics',
      name: 'surgical orthodontics',
      navigation: true,
      component: SurgicalOrthodontics
    },
    {
      path: '/invisalign',
      name: 'invisalign',
      navigation: true,
      component: Invisalign
    },
    {
      path: '/invisalign-teen',
      name: 'invisalign teen',
      navigation: true,
      component: InvisalignTeen
    },
    {
      path: '/forsus',
      name: 'forsus',
      navigation: true,
      component: Forsus
    },
    {
      path: '/i-cat',
      name: 'i cat',
      navigation: true,
      component: ICat
    },
    {
      path: '/acceledent-aura',
      name: 'acceledent aura',
      navigation: true,
      component: AcceledentAura
    },
    {
      path: '/suresmile-info',
      name: 'suresmile-info',
      navigation: true,
      component: SuresmileInfo
    },
    {
      path: '/suresmile-faqs',
      name: 'suresmile faqs',
      navigation: true,
      component: SuresmileFaqs
    },
    {
      path: '/how-suresmile-works',
      name: 'how-suresmile-works',
      navigation: true,
      component: HowSuresmileWorks
    },
    {
      path: '/suresmile-comparison',
      name: 'suresmile comparison',
      navigation: true,
      component: SuresmileComparison
    },
    {
      path: '/suresmile-before-and-after',
      name: 'suresmile-before-and-after',
      navigation: true,
      component: SuresmileBeforeandAfter
    },
    {
      path: '/the-suresmile-process',
      name: 'the suresmile process',
      navigation: true,
      component: TheSuresmileProcess
    },
    {
      path: '/suresmile-testimonials',
      name: 'suresmile testimonials',
      navigation: true,
      component: SuresmileTestimonials
    },
    {
      path: '/north-star-office',
      name: 'north star office',
      navigation: true,
      component: NorthStarOffice
    },
    {
      path: '/east-office',
      name: 'east-office',
      navigation: true,
      component: EastOffice
    },
    {
      path: '/appointment-request',
      name: 'appointment-request',
      navigation: true,
      component: AppointmentRequest
    },
    {
      path: '/post-appointment-survey',
      name: 'post appointment survey',
      navigation: true,
      component: PostAppointmentSurvey
    },
    {
      path: '/refer-a-friend',
      name: 'refer a friend',
      navigation: true,
      component: ReferaFriend
    },
    {
      path: '/appointment-thank-you',
      name: 'appointment thank you',
      navigation: true,
      component: AppointmentThankYou
    },
    {
      path: '/refer-a-friend-thank-you',
      name: 'refer a friend thank you',
      navigation: true,
      component: ReferaFfriendThankYou
    },
    {
      path: '/post-appointment-thank-you',
      name: 'post appointment thank you',
      navigation: true,
      component: PostAppointmentThankYou
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      component: Contact,
      children: [
        {
          path: '/contact#form',
          name: 'contact form'
        }
      ]
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: 'page-not-found',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

export default router
