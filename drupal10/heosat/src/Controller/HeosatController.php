<?php

namespace Drupal\heosat\Controller;

use Drupal\Core\Controller\ControllerBase;

class HeosatController extends ControllerBase {
  public function app() {
    return [
      '#markup' => '<main id="app" class="heosat"></main>',
      '#attached' => [
        'library' => ['heosat/heosat_app'],
      ],
    ];
  }
}
