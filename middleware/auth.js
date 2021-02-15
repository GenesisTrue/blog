export default function(context) {
  console.log(context.store.getters.checkAuthUser)
  if(context.store.getters.checkAuthUser) {
    context.redirect('/admin/auth')
  }
}