# e 仮面ライダー電王 デカヘソ239

machineName: e 仮面ライダー電王 デカヘソ239
manufacturer: 京楽産業. / KYORAKU
releaseDate: 2025-11-04
modelType: ライトミドル / スマパチ / デカヘソ / LT搭載
gameType: 一種二種混合 / ST型（下位RUSH→LT） / C時短搭載
modelNumber: e仮面ライダー電王-239verK2
inspectionNumber: 5P0702
jackpotProbability: 通常時図柄揃い 約1/239.9。右打ち中実質約1/22.5（大当り約1/239.9＋小当りV入賞約1/31.9＋C時短約1/112.9の合算）。
initialPayout: 2R 約300個（払出）100%。初当りの55%で電王RUSH、45%で通常へ。
rushEntryRate: 電王RUSH 55%
rushContinuationRate: 電王RUSH ST16回＋残保留4個、TOTAL約60%（RUSH終了時の残保留4個引き戻し約16.5%を含む）。
ltName: CLIMAX RUSH
ltEntryRoute: 電王RUSH中の図柄揃い大当りで「最終決戦デスイマジン」が発生した場合、バトル勝利（勝率約40%）でLTへ。C時短契機の「過去か未来かチャレンジ」は成功（約50%）でLTへ。解析振り分けでは電王RUSH中の当選契機の約30%が10R＋最終決戦（うち勝利でLT）、約20%がSTリセット契機＋過去か未来かチャレンジ（うち成功でLT）、約50%が10R＋下位RUSH継続。詳細遷移に展開するとLT31回側は約12%＋約10%、下位16回側は約68%＋約10%とする解析資料もある。
ltEntryRate: 電王RUSH中の当選契機ベースではLT昇格期待は約22%（約30%×勝利約40%に相当する約12%＋約20%×成功約50%に相当する約10%という解析振り分けと整合）。通常遊技全体基準の総LT到達率/確率は直接公表値を確認できず、初当り55%やRUSH継続率から独自算出しない（UNVERIFIED_AFTER_RESEARCH）。
ltContinuationRate: CLIMAX RUSH ST31回＋残保留4個、TOTAL約80%。残保留4個の引き戻し約16.5%を含む。CLIMAX RUSH後の残保留で引き戻した場合は電王RUSH中BONUSと同じ振り分けとなる。
ltPayoutStructure: CLIMAX RUSH中の当選は10R×2 約3000個（1500個×2回）＋CLIMAX RUSH約80% / STリセット＋CLIMAX RUSH約20%。図柄揃い大当りはALL約3000個。残保留引き戻し時は下位電王RUSH中BONUSと同じ振り分け。
totalPayoutDistribution: 特図1=2R約300個＋電王RUSH55% / 2R約300個＋通常45%。電王RUSH中=10R約1500個＋最終決戦デスイマジン約30% / STリセット＋過去か未来かチャレンジ約20% / 10R約1500個＋電王RUSH継続約50%。最終決戦は勝利約40%でLT、敗北は下位継続。過去か未来かチャレンジは成功約50%でLT、失敗は下位リスタート。CLIMAX RUSH中=10R×2約3000個＋LT約80% / STリセット＋LT約20%。
timeShortening: 通常0回 / 電王RUSH 16回＋残保留4個 / CLIMAX RUSH 31回＋残保留4個。C時短当選時はST回数リセットまたはLT昇格。
cTimeOrSpecialSystems: C時短約1/112.9を右打ち実質約1/22.5の合算要素として搭載。DSS（ダイレクトスタートステージ）とデカヘソを搭載。右打ち小当りはV入賞が条件。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。
gameFlow: |
  通常時（図柄揃い約1/239.9）
   ↓ 初当り2R約300個
   ├─ 45% → 通常時
   └─ 55% → 電王RUSH（ST16回＋残保留4、TOTAL約60%）
                 ↓ 右打ち当選（実質約1/22.5）
                 ├─ 図柄揃い → 10R約1500個
                 │              ├─ 最終決戦デスイマジン発生→勝利約40% → LT
                 │              └─ 非LT → 電王RUSH継続
                 └─ C時短 → 過去か未来かチャレンジ
                                ├─ 成功約50% → LT
                                └─ 失敗 → 電王RUSHリスタート
   LT「CLIMAX RUSH」（ST31回＋残保留4、TOTAL約80%）
                 ↓
              図柄揃いは約3000個（1500個×2）＋LT継続
              C時短はSTリセット＋LT継続
  ※LT終了後の残保留4個で引き戻した場合は、電王RUSH中BONUSと同じ振り分け。
notes:
- 京楽公式が2025-09-29にLT搭載、通常約1/239.9、LT「CLIMAX RUSH」、LT継続約80%、LT中図柄揃いALL3000個を発表し、2025-11-04に全国導入開始を公式告知。
- 2024年9月導入の `e 仮面ライダー電王`（図柄揃い約1/319.9、別ゲーム構造）とは別スペック。型式 `e仮面ライダー電王-239verK2` / 検定番号5P0702で分離。
- 右打ち約1/22.5は純粋な大当り確率ではなく、大当り約1/239.9・小当りV入賞約1/31.9・C時短約1/112.9の合算値。
- 3000個は10R単発ではなく1500個×2回。払出表記と実獲得を混同しない。
- 電王RUSH中の「約30%最終決戦 / 約20%過去か未来か / 約50%下位継続」は必勝本・情報島＋で一致。別解析の詳細遷移「12% LT31 / 10% C時短LT31 / 68% 下位16 / 10% C時短下位16」とも、30%×勝利約40%=約12%、20%×成功約50%=約10%として整合するためCONFLICTではない。
- 通常遊技全体基準の総LT到達率/確率は公式・業界・複数解析を横断して直接値を確認できず、経路確率から独自算出しない。
sources:
- https://www.kyoraku.co.jp/news/detail/847
- https://www.kyoraku.co.jp/news/detail/850
- https://news.p-world.co.jp/articles/32050/greenbelt
- https://www.p-world.co.jp/machine/database/10362
- https://hazuse.com/hd/5p0702/
- https://1geki.jp/pachinko/e_kmnr_deno_dh239/
- https://1geki.jp/pachinko/e_kmnr_deno_dh239/52/
- https://nana-press.com/kaiseki/machine/1063/32455/
- https://p.hisshobon.jp/machine/4626/1/111869
- https://p-johojima.jp/machine_spec/post-16414/
- https://chonborista.com/pachinko/kyoraku/242453/
retrievedAt: 2026-09-23
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
- 通常遊技全体基準の総LT到達率/確率（十分な再探索後も直接公表値未確認）
conflicts: []
