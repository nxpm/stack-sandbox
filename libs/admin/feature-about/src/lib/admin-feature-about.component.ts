import { Component } from '@angular/core'
import { AdminDataAccessCoreService } from '@stack-sandbox/admin/data-access-core'
import { environment } from '@stack-sandbox/admin/feature-core'

@Component({
  template: `
    <div class="container my-3 my-md-5">
      <div class="card">
        <div class="card-header">
          About
        </div>
        <pre>{{ environment | json }}</pre>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class AdminFeatureAboutComponent {
  public environment = environment
  public uptime$ = this.data.uptimeWatch()
  constructor(private readonly data: AdminDataAccessCoreService) {}
}
