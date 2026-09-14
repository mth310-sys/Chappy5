更新日: 2026-09-14

## 現在地点
- recordCount: **1699**
- latestRecordAdded: **スターハナハナ-30 — No.1699**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-01-06_star-hanahana-30.md`
- chronologicalFrontier: **2025-01-06**
- schema: **resetBehavior v0.7**
- status: **2025-01-06_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED_NEXT_BOUNDARY_AUDIT_2025-01-20**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1697を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1698 `チバリヨ2プラス`、No.1699 `スターハナハナ-30` を追加し、性能コア + resetBehavior v0.7を収録。
- 2025-01-06群は `Lサラリーマン金太郎 / チバリヨ2プラス / スターハナハナ-30` の3機を処理済み。PB・地域先行・別媒体/別型式を再監査し、30Φ版スターハナハナとスマート沖スロ版は別機種/別導入日として分離したうえで本群をCLOSED。

## No.1698 — チバリヨ2プラス
- path: `docs/real_machine_db/machines/2025-01-06_chibariyo2-plus.md`
- manufacturer: **オーゼキ（製造） / NET（販売・ブランド）**
- formalModel: **Lチバリヨ2プラスZC**
- inspectionCode: **4S1086**
- releaseDate: **2025-01-06**
- settings: **1 / 2 / 4 / 5 / 6 / L**
- payoutRate: **97.6 / 99.6 / 104.7 / 109.7 / 114.9%**
- initialHit: **1/328 → 1/224**
- bonusCombined: **1/108.4 → 1/74.8**
- base: **27.9 → 29.8G/50枚**
- netIncrease: **REG/BIG 約3.0枚/G / SUPER BIG 約4.5枚/G**
- basicPayout: **REG約90枚 / BIG約210枚 / SUPER BIG約315枚**
- reset: **ゲーム数天井・チェリー回数・内部状態・内部モード・有利区間をRESET/再抽選**
- resetCeiling: **通常最大999G+α → 設定変更後350Gまたは600Gに期待、最大600G+α**
- resetMode: **通常B以上 約50% / チャンスB移行にも期待**
- carryOver: **ゲーム数天井・チェリー回数・内部状態・内部モード・有利区間CARRY_OVER**
- powerCycle: **ゲーム数・チェリー回数・モードCARRY_OVERを機種別比較で直接確認。状態もPlus固有二次表でCARRY_OVER。純電断時の有利区間だけは本機固有の独立高信頼資料を固定できずUNVERIFIED。**
- resetDetection: **朝一600G+α超過でボーナス非当選なら据え置き濃厚材料。本機固有ガックン/ランプ確定判別は十分な再探索後も未固定。**
- missing: **設定変更時の通常モード完全振り分け、内部状態具体振り分け、純電断有利区間、本機固有ガックン、純電断開始表示。**

## No.1699 — スターハナハナ-30
- path: `docs/real_machine_db/machines/2025-01-06_star-hanahana-30.md`
- manufacturer: **パイオニア（ブランド/販売） / オニオン（製造元）**
- formalModel: **SスターハナハナMX-30**
- inspectionCode: **4S0585**
- releaseDate: **2025-01-06**
- medium: **30Φメダル機**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRateCanonical: **97 / 99 / 101 / 104 / 107 / 110%**
- bonus: **BIG 1/270→1/218 / REG 1/387→1/242 / 合算1/159→1/114**
- base: **約39.9G/50枚**
- basicPayout: **BIG最大240枚 / REG最大96枚**
- reset: **ノーマルタイプ・天井非搭載のため天井短縮/AT・CZモード/周期/ポイント等は構造上N/A。**
- resetBenefit: **天井短縮や朝一モード優遇はNONE_NOT_APPLICABLE。設定変更専用の公開朝一数値もNONE_CONFIRMED_AFTER_RESEARCH。**
- powerCycle: **BGM変化条件・リールガックンは主要解析でも調査中。ボーナス成立状態および1〜100G/101G以降の告知用カウントの設定変更/純電断契約は十分な再探索後もUNVERIFIED。**
- resetDetection: **天井到達による判別不可。本機固有ガックン/BGM確定判別もUNVERIFIED_AFTER_RESEARCH。**
- conflict: **主要業界/解析群は機械割97〜110%で一致。一部動画説明欄のみ97.6〜114.9%の外れ値を掲載し、平均化せずCONFLICTとして隔離。yardstick canonicalは多数一致の97〜110%系列。**

## 2025-01-06境界 — CLOSED 3/3 canonical
1. Lサラリーマン金太郎 — No.1697 DONE
2. チバリヨ2プラス — No.1698 DONE
3. スターハナハナ-30 — No.1699 DONE
- 30Φ版スターハナハナは2025-01-06導入を公式更新履歴・解析DBで確認。
- `スマート沖スロ スターハナハナ` は別媒体/別型式かつ別日導入として本群へ混入させない。

## 次境界監査 — 2025-01-20中心
- `スマート沖スロ スターハナハナ` は複数の導入予定/解析資料で **2025-01-20** が優勢。Pachibee、1geki、P-Summa、ALL7系で1/20を確認。
- 一方K-Naviに **2025-01-13** 表記があり、旧境界メモでは別資料に1/27表記もあったため、No.1700採番前に公式/業界/検定型式と合わせて最終監査し、競合はCONFLICTとして保持する。
- 2025-01-20群候補として `A-SLOT+ ディスクアップ ULTRAREMIX / Lにゃんこ大戦争 超神速 / Lパチスロ シン・エヴァンゲリオン / L島娘 / スマート沖スロ スターハナハナ / 七つの魔剣が支配する` を導入日一覧で確認。PB・地域先行・別型式・延期/段階導入を再監査して正式キューを固定する。

## 次回再開地点
- 最新mainを再同期しNo.1698 / No.1699と本handoffを確認。
- **No.1700候補 `スマート沖スロ スターハナハナ` — canonical候補2025-01-20（1/13・旧1/27表記との導入日CONFLICTを先に最終監査）** から再開する。
- 同機が時系列上1/20で確定した後、2025-01-20同日群の残機種を正式な導入境界・型式順に処理する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### チバリヨ2プラス
- NET公式: https://www.net-fun.co.jp/chibariyo2PLUS/
- NET公式アプリ案内: https://www.net-fun.co.jp/app/3478
- G-net検定公示整理: https://g-net-ps.com/industry/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E6%83%85%E5%A0%B1%EF%BC%88%E4%BB%A4%E5%92%8C6%E5%B9%B410%E6%9C%8818%E6%97%A5%E5%85%AC%E7%A4%BA%E5%88%86%EF%BC%89/
- グリーンべると検定: https://web-greenbelt.jp/post-89274/
- P-WORLD/グリーンべると: https://news.p-world.co.jp/articles/29653/greenbelt
- HAZUSE: https://hazuse.com/hd/4s1086/
- なな徹 基本: https://nana-press.com/kaiseki/machine/858/26539/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/858/26545/
- なな徹 モード: https://nana-press.com/kaiseki/machine/858/26547/
- なな徹 天井: https://nana-press.com/kaiseki/machine/858/26628/
- なな徹 立ち回り: https://nana-press.com/kaiseki/machine/858/26543/
- 必勝本 設定変更/電断: https://hisshobon.com/machineinfo/85673/
- 必勝本 天井: https://hisshobon.com/machineinfo/85681/
- 必勝本 モード: https://hisshobon.com/machineinfo/85677/
- 必勝本 基本: https://p.hisshobon.jp/vpage/2672/2
- Slothack電断/状態: https://slothack.net/matome/148020/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/223151/
- パチビー: https://www.pachibee.jp/machines/index/224120001

### スターハナハナ-30
- パイオニア公式2025製品: https://www.slot-pioneer.co.jp/products/2025.html
- パイオニア公式更新履歴: https://www.slot-pioneer.co.jp/news.html
- P-WORLD/グリーンべると: https://news.p-world.co.jp/articles/29196/greenbelt
- HAZUSE: https://hazuse.com/hd/4s0585/
- 必勝本 基本: https://hisshobon.com/machineinfo/85220/
- 必勝本 設定変更/電断: https://p.hisshobon.jp/vpage/2661/2
- パチビー: https://www.pachibee.jp/machines/index/224120002
- ぱちセブン天井: https://pachiseven.jp/machines/7052/cutout/3
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/148/kh01.php
- かくろくリセット調査: https://www.kaku6.jp/slot/starhnhn30/
- 製造元補助: https://www.nakaiti.com/html/sOnion001.html
- 機械割CONFLICT動画説明: https://www.youtube.com/watch?v=YYxb7zL0Ta4

### 次境界
- ALL7 2025年1月導入一覧: https://www.all7.jp/plans/index/2025/01
- Pachibee スマート沖スロ スターハナハナ: https://www.pachibee.jp/machines/index/224120005
- 1geki スマート沖スロ スターハナハナ: https://1geki.jp/slot/l_star_hanahana/
- P-Summa スターハナハナ媒体差: https://psumma.jp/slot/55525/
- K-Navi導入表記: https://p-kn.com/slot/4211/
