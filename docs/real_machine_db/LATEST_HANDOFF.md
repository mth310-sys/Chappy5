更新日: 2026-09-12

## 現在地点
- recordCount: **1397**
- latestRecordAdded: **パチスロラブ嬢2プラス — No.1397**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-03-08_love-jyo-2-plus.md`
- chronologicalFrontier: **2021-03-08**
- frontierLatestMachine: **パチスロラブ嬢2プラス — No.1397**
- schema: **resetBehavior v0.7**
- status: **2021-03-08_GROUP_OPEN_3_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- mainはNo.1396「パチスロ青の祓魔師」まで進行済みだったため、固定キュー次機種の **No.1397「パチスロラブ嬢2プラス」** から重複せず継続。
- 性能コア + resetBehavior v0.7を収集し、No.1397を追加。
- 遡及resetBehavior QAカーソルは今回動かさず、次回 `2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）から継続。

## No.1397 — パチスロラブ嬢2プラス
- path: `docs/real_machine_db/machines/2021-03-08_love-jyo-2-plus.md`
- manufacturer: **オリンピア**
- formalModel: **Sパチスロラブ嬢2プラスL4**
- certificationNumber: **0S1377**
- releaseDate: **2021-03-08**
- generation/system: **6.1号機 / AT / 周期抽選 / 差枚数管理型・ループストック型AT**
- payoutRateBySetting: **97.4 / 99.3 / 102.0 / 104.9 / 107.7 / 110.0%**
- AT初当たり: **1/303.1 / 285.9 / 262.1 / 240.6 / 218.1 / 203.9**
- baseGamesPer50: **38.4 / 39.1 / 39.7 / 40.7 / 41.0 / 41.4G**
- netIncrease: **AT約2.7枚/G**
- basicPayout: **AT初当たり100枚保証 / 差枚数管理 + ループストック / HAREM BONUS 20G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH_WITH_LAMP_CONFLICT**

### resetBehavior v0.7 — No.1397
- 本機は単純G数天井ではなく、**10周期 / 押し順ラブ目最大50回 / アフターデートチャンス3回失敗後の次周期**という複数天井を持つ。10周期の平均到達Gは設定1〜6で **631.9 / 626.6 / 619.8 / 615.7 / 611.2 / 606.6G**。これは通常仕様の平均値で、設定変更専用数値ではない。
- 設定変更時の周期数・押し順ラブ目回数・ADC失敗回数、内部状態、開始ステージは、当時資料・後年資料・型式名検索まで再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の上記各進行値のCARRY_OVER契約、純電源OFF→ON時の各進行値・内部状態・開始ステージも `UNVERIFIED_AFTER_RESEARCH`。前作/後継機から推測転記しない。
- 設定変更専用の短縮天井、専用モード/ステージ振り分け、朝一特定G以内AT当選率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 後年立ち回り資料では「リセット恩恵 特になし / リセット狙い 特に狙えない」と整理されるが、当時資料では天井・内部状態・ステージが「調査中」のため、詳細RESET契約の根拠には使用しない。
- 有利区間ランプ位置はクレジット右下ドットで一致するが、通常時状態は競合。ちょんぼりすたは **通常時消灯・リセット判別不可**、パチスロメソッドは **実際は通常時点灯・朝一消灯=変更濃厚/点灯=据え置き濃厚** と主張。`CONFLICT_ADVANTAGEOUS_SECTION_LAMP_NORMAL_STATE_AND_RESET_DETECTION` として平均化・片方採用をしない。
- 本機固有ガックン条件・発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2021-03-08群 — OPEN
固定キュー:
1. **パチスロ北斗の拳 宿命 — No.1395 / DONE**
2. **パチスロ青の祓魔師 — No.1396 / DONE**
3. **パチスロラブ嬢2プラス — No.1397 / DONE**
4. **パチスロ アイドルマスター ミリオンライブ！ — NEXT / No.1398候補**
5. **ワンチャンス1000**
6. **ミスタートリプルクラウン（SトリプルクラウンDX-30 / 沖縄地域流通）**

- status: **2021-03-08_GROUP_OPEN_3_OF_6_KNOWN_PROCESSED**。
- 6機処理後、全メーカー・別型式・PB・地域差・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-03-08群の **No.1398候補「パチスロ アイドルマスター ミリオンライブ！」** から継続。
- 性能コア + resetBehavior v0.7を同時収集。設定変更/据え置き/純電断、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を優先確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）。
- 今回は本線を優先したためカーソル未移動。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）**。

## GitHub保存
- No.1396追加 commit: `2e77b11e4e6f37675e584e7e682c8e46f6ac7a64`
- No.1397追加 commit: `2498d9a4c49cc38106c9058fcb9325c92ed6ee87`

## 主要出典 — 取得日 2026-09-12
### No.1397 パチスロラブ嬢2プラス
- https://yugi-nippon.com/pachinko-new-machine/post-41744/
- https://web-greenbelt.jp/post-43449/
- https://hazuse.com/machine/pachislot/0S1377/
- https://1geki.jp/slot/s_lovejyo2plus/
- https://1geki.jp/slot/s_lovejyo2plus/4/
- https://1geki.jp/slot/s_lovejyo2plus/81/
- https://nana-press.com/kaiseki/machine/112/3249/
- https://pachiseven.jp/machines/6233/cutout/3
- https://chonborista.com/slot/orinpia-slot/129350/
- https://www.slopachi-quest.com/article/rabujou2plus-tenjou/
- https://slotmethod.jp/archives/10976/
- https://zenrin-net.co.jp/9296/
