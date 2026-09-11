更新日: 2026-09-11

## 現在地点
- recordCount: **1316**
- latestRecordAdded: **パチスロ サラリーマン金太郎～MAX～ — No.1316**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-11-05_salaryman-kintaro-max.md`
- chronologicalFrontier: **2019-11-05**
- frontierLatestMachine: **パチスロ サラリーマン金太郎～MAX～ — No.1316**
- schema: **resetBehavior v0.7**
- status: **2019_11_05_GROUP_OPEN_2_OF_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1315 `パチスロ北斗の拳 天昇` を再取得。
- `INDEX.md` は古い表示のため、README明示ルールどおり `LATEST_HANDOFF.md` とmain実レコードを正本進捗として優先。
- No.1316 **パチスロ サラリーマン金太郎～MAX～**を追加。
- 2019-11-05群は北斗の拳 天昇 / サラリーマン金太郎～MAX～を処理済み。残り確認済み候補は **蒼穹のファフナーEXODUS**。
- 遡及QAは `リングにかけろ1` を現行v0.7メタデータへ正式化。既存 `coreStatus: PARTIAL` は維持し、reset側だけ `PARTIAL_RESEARCH_EXHAUSTED` とした。

## No.1316 — パチスロ サラリーマン金太郎～MAX～
- manufacturer: **EXCITE（エキサイト）**
- formalModel: **`Sサラリーマン金太郎～MAX～X2`**
- certificationNumber: **`9S0872`**
- releaseDate: **2019-11-05**
- generation/system: **6号機 / AT / 疑似ボーナス＋高純増ナビ回数管理AT**
- payout: **97.5 / 99.3 / 101.2 / 104.0 / 107.7 / 112.0%**
- 金太郎ルーレット: **1/319 / 309 / 303 / 296 / 289 / 282**
- 金太郎チャンス初当たり: **1/760 / 736 / 713 / 695 / 669 / 653**
- base: **約50G/50枚**
- 純増: **約8.0枚/G**
- 疑似ボーナス: 赤7約70枚 / 青7約120枚
- 最深部天井: **750G+前兆 → 金太郎ルーレット**

### resetBehavior v0.7 — No.1316
- 設定変更: **天井RESET / モード再抽選 / 金爆RESET / 鉄拳制裁レベルRESET / 非有利区間開始 / 液晶0G**。
- 据え置き: **内部天井G・モード・金爆・鉄拳制裁レベル・有利区間CARRY_OVER**。ただし液晶G数等は初期表示へ戻る。
- 純電源OFF→ON: **上記内部値をCARRY_OVER**、液晶0G・ヤマト本社昼から開始。
- 通常A/B天井750G+前兆、通常C515G+前兆、天国66G+前兆。
- 朝一恩恵: 設定変更後は非有利区間を経由し、**有利区間移行後25G間がAT直撃ゾーン**。
- 有利区間ランプは通常時常時消灯型、液晶G数も据え置きで0G表示のため、これら単独で設定変更判別不可。
- 非有利区間中KC直撃の公開解析値: 弱チェリー0.39%、強チェリー25%、ハッピ0.39%、チャンス目25%、確定役100%。
- 有利区間移行時の成立役不問KC直撃: 設定1/2 1.56%、3/4 1.95%、5/6 2.34%。朝一限定値ではないため分離して保存。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_ring-ni-kakero1.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-03_ring-ni-kakero1.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- 既存性能側 `coreStatus: PARTIAL` は変更していない。
- リングにかけろ1は通常時天井なし / 有利区間制度前を再確認。設定変更・据え置き・純電断時のRT残G/内部RT/ボーナス成立・告知状態、ガックン/初期出目、公開朝一数値は資料系統を変えて再探索しても直接契約を固定できず推測補完しない。
- Git追加順の次実機レコードは **`docs/real_machine_db/machines/2007-03_godzilla-pachislot-wars.md`（ゴジラパチスロウォーズ）**。同レコードにも旧 `resetBehaviorQA: PARTIAL` があるため、次回は現行v0.7として再評価・正式化対象。

## 2019-11-05群 — OPEN
確認済み候補:
1. **パチスロ北斗の拳 天昇** — No.1315 / 処理済み。
2. **パチスロ サラリーマン金太郎～MAX～** — No.1316 / 処理済み。
3. **蒼穹のファフナーEXODUS** — 未処理。導入日を個別一次/当時資料で再固定してからNo.1317候補として処理する。

## 継続監査
- `プレドキ！`: プレゴ専用PBまでは固定済み。P-WORLDで2019-12-02時点の機種DB掲載は確認済みだが、具体的初回ホール導入日未固定のため未登録継続。本線は止めない。
- 2019-11-05群CLOSED前に全メーカー/別型式/別スペック/PB/地域差を再監査する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1316 を再取得。
2. **`蒼穹のファフナーEXODUS`** の2019-11-05導入を個別資料で再固定し、性能コア＋resetBehavior v0.7を収集してNo.1317候補として処理。
3. 11/5群を横断再監査しCLOSED可否を判定。
4. 遡及QAは **`2007-03_godzilla-pachislot-wars.md`** から再開し、既存性能完了判定を崩さずreset側だけ現行QA状態へ揃える。

## 主要出典 — 取得日 2026-09-11

### No.1316 サラリーマン金太郎～MAX～
- HAZUSE: https://hazuse.com/machine/pachislot/9S0872/genre/209/
- K-Navi: https://p-kn.com/slot/3332/
- Pachiseven: https://pachiseven.jp/articles/detail/10178
- 1geki: https://1geki.jp/slot/s_sarakinmax/
- スロパチくえすと: https://www.slopachi-quest.com/article/salarymankinntarou-max-tennjou/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/kintaroumax-hyena/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/09/12/sarakin_tenjyou/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-30798/

### リングにかけろ1 reset QA
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/4578
- P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2058/greenbelt
- K-Navi: https://p-kn.com/slot/704/
- atwiki: https://w.atwiki.jp/rinkake/
