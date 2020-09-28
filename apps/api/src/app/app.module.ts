import { ApiFeatureAuthModule } from '@stack-sandbox/api/feature-auth'
import { ApiFeatureCoreModule } from '@stack-sandbox/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
