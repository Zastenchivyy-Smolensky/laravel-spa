<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostTest extends TestCase
{
    /**
     * @test
     */
    public function 一覧を習得()
    {
        $response = $this->get('api/posts');
        $response->assertStatus(200);
    }
}
