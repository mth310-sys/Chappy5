更新日: 2026-09-11

## 現在地点
- recordCount: **1292**
- latestRecordAdded: **パチスロ鉄拳4**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-07-22_tekken4.md`
- chronologicalFrontier: **2019-07-22**
- frontierLatestMachine: **パチスロ鉄拳4 — No.1292**
- schema: **resetBehavior v0.7**
- status: **2019-07-22_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1291を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoffのNo.1291 / 2019-07-08群CLOSEDを引き継ぎ、7/9〜7/21境界を監査。
- No.1292 `パチスロ鉄拳4` を性能コア + resetBehavior v0.7で登録。
- 2019-07-22群は日刊スポーツ当時導入カレンダー、パチンコ・パチスロ.com当時カレンダー等で監査し、スロットは鉄拳4のみを固定したためCLOSED。
- 2019-07-23〜08-04境界を先行監査し、次の明確なスロット導入群を2019-08-05と確認。

## No.1292 — パチスロ鉄拳4
- manufacturer: **山佐**
- formalModel: **`Sパチスロ鉄拳4CC`**
- certificationNumber: **`9S0147`**
- generation/system: **6号機 / AT / CZ・疑似ボーナス / 鉄拳チャンス連鎖型**
- releaseDate canonical: **2019-07-22**
- 機械割: **97.8 / 99.0 / 100.4 / 102.7 / 105.3 / 108.0%**
- 引き戻し込みボーナス合算: **1/193.6 / 184.5 / 175.0 / 162.5 / 153.6 / 143.9**
- BIG: **1/411.3 → 1/232.6**
- REG: **1/740.9 → 1/814.5**
- バトルボーナス: **1/723.1 → 1/703.2**
- baseGamesPer50: **約54G**
- 疑似ボーナス純増: **約4.0枚/G**
- BIG約126枚 / REG約56枚。
- 天井: **有利区間移行後1000G+前兆**。到達時はバトルボーナス+勝利ストック1個。

### resetBehavior v0.7
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- settingChange: 天井G数リセット、ボーナス高確/TC高確終了、内部状態再抽選、有利区間は非有利区間から。
- carryOver: 天井G数、高確、内部状態、有利区間を引継ぎ。
- purePowerCycle: 据え置き同様に天井G数、高確、内部状態、有利区間を引継ぎ。
- advantageousSection: 設定変更で非有利区間スタート。据え置き/純電断は引継ぎ。有利区間ランプも引継ぐが通常時は基本消灯のため常用判別には不向き。
- resetBenefit: 主要解析では明確な設定変更専用恩恵は「なし」。短縮天井も確認されず。
- resetDetection: ガックン判別有効、ガックンで設定変更濃厚。期待値見える化ではBIG終了画面「木人」出現を設定変更確定とする解析あり。PUSH長押しの内部G数表示も前日情報があれば判別材料。
- publicMorningNumbers: 設定変更専用モード振り分け、朝一特定G以内当選率、短縮天井数値は再探索後も未確認。

## qualityNotes / conflicts
- 型式 `Sパチスロ鉄拳4CC` / 検定番号 `9S0147` はHAZUSEとP-WORLDで一致。
- 導入日2019-07-22はK-Navi、P-WORLD、一撃、日刊スポーツ当時導入カレンダー等で一致。
- 天井は内部有利区間G数基準。ボーナス後高確は前有利区間を引き継ぐため、データカウンターの単純G数と内部天井G数が一致しない場合あり。
- 有利区間ランプは据え置き時引継ぎだが、通常時は基本消灯なので「朝一消灯=変更」とはしない。
- ガックン/木人は攻略解析情報でありメーカー一次値ではない。
- 主要性能値で平均化が必要なCONFLICTは今回確認なし。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`（PSアドリブ王子）から再開**。既にresetBehavior収録済みなら重複編集せず次レコードへ進む。
- 既存 `COMPLETE_CORE` は不用意に崩さず、reset QAを別管理する。

## 2019-07-22群 — CLOSED
- No.1292 パチスロ鉄拳4

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1292を再取得。
2. 2019-07-23〜08-04境界を再確認後、**2019-08-05群**へ進む。
3. 現時点の同日候補は **パチスロあの日見た花の名前を僕達はまだ知らない。 / 麻雀格闘倶楽部参 / AT天元突破グレンラガン / ハイハイシオサイ / バンバンクロス**。導入日・別型式・PB・地域差を個別照合してNo.1293候補を確定する。
4. 同日群を全メーカー / 別型式 / 別スペック / PB / 地域差まで監査。
5. 遡及QAは `2007-02_ps-adlib-ouji.md` から再開。既収集なら重複せずGit追加順の次レコードへ進む。
6. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### パチスロ鉄拳4
- HAZUSE: https://hazuse.com/machine/pachislot/9S0147/
- P-WORLD: https://opt.p-world.co.jp/machine/database/8946
- K-Navi: https://p-kn.com/slot/3244/
- 一撃: https://1geki.jp/slot/s_tekken4/
- スロパチクエスト 天井/朝一: https://www.slopachi-quest.com/article/tekken4-tennjou/
- 期待値見える化 朝一リセット: https://slotjin.com/slot/tekken4-reset/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/06/20/tekken4_tennjou/
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201905240000339.html
- 日刊スポーツ発表会: https://www.nikkansports.com/amusement/pachislot/news/201905160000423.html

### 次群監査
- スロット解析.com 2019年8月新台カレンダー: https://slotkaiseki.com/2019_8/
- パチスロ立ち回り講座 新台導入予定日: https://crankyseven.com/newmachine-info.htm
- パチンコ・パチスロ.com 2019新台導入日カレンダー: https://pachinkopachisro.com/archives/52807194.html
