更新日: 2026-09-11

## 現在地点
- recordCount: **1293**
- latestRecordAdded: **パチスロあの日見た花の名前を僕達はまだ知らない。**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-08-05_anohana.md`
- chronologicalFrontier: **2019-08-05**
- frontierLatestMachine: **パチスロあの日見た花の名前を僕達はまだ知らない。 — No.1293**
- schema: **resetBehavior v0.7**
- status: **2019-08-05_GROUP_OPEN_1_OF_5_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1292を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoffの2019-07-22群CLOSEDを引き継ぎ、2019-08-05群へ前進。
- No.1293 `パチスロあの日見た花の名前を僕達はまだ知らない。` を性能コア + resetBehavior v0.7で登録。
- 8/5群はまだOPEN。既知候補 `麻雀格闘倶楽部参 / AT天元突破グレンラガン / ハイハイシオサイ / バンバンクロス` を未処理として残す。

## No.1293 — パチスロあの日見た花の名前を僕達はまだ知らない。
- manufacturer: **サミー**
- formalModel: **`SあのはなZM`**
- certificationNumber: **`9S0405`**
- generation/system: **6号機 / AT / CZ・疑似ボーナス / 純増変動型セット数管理AT**
- releaseDate canonical: **2019-08-05**
- 機械割: **97.9 / 98.9 / 100.8 / 104.1 / 107.5 / 110.1%**
- AT初当たり: **1/386.7 / 373.1 / 342.5 / 310.9 / 290.1 / 272.0**
- baseGamesPer50: **約50.6G**
- 純増: **ATメイン約1.5枚/G / 高純増区間約3.0〜3.1枚/G**
- AT「Flower's memory」: **1セット20G**。AT開始時21Gプロローグ。
- BIG: ベルナビ20回+α / REG: ベルナビ6回。
- 仮天井: **有利区間移行後500GでなかよしメーターMAX**。
- 本天井: **有利区間移行後1000G+前兆でごめんまBONUS**。

### resetBehavior v0.7
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- settingChange: 天井G数RESET、なかよしメーターRESET、リーチボード非表示、非有利区間、夕方の神社スタート。
- carryOver: 天井G数・内部状態・有利区間を引継ぎ。メーター/リーチボードも内部値を引継ぐ解析あり。
- purePowerCycle: 据え置き同様に天井G数・内部状態・有利区間・有利区間ランプを引継ぐ。
- advantageousSection: 設定変更で非有利区間・ランプ消灯。据え置き/純電断は引継ぎ。ただしランプ非連動型のため消灯単独では変更確定不可。
- resetBenefit: 非有利区間中のレア役経由AT直撃チャンス。ただしAT終了後も同じ非有利区間を通るため設定変更専用恩恵ではない。主要解析も朝一恩恵は弱い/特になしと評価。
- resetDetection: 朝一ランプ点灯は据え置き濃厚、前日点灯→朝一消灯ならリセット濃厚、1G目ガックンも変更濃厚。ランプ点灯+リーチボード非表示も据え置き材料。
- publicMorningNumbers: 非有利区間平均約15G。有利区間移行時AT直撃率は弱チェリー/スイカ **5.0 / 6.2 / 7.9 / 9.9 / 11.1 / 12.3%**、強チェリー/チャンス目 **50.0 / 50.5 / 51.3 / 51.7 / 52.2 / 53.0%**。設定変更専用ではなく非有利区間共通値として保存。

## qualityNotes / conflicts
- 型式 `SあのはなZM` / 検定番号 `9S0405` はHAZUSEで確認。
- 導入日2019-08-05は一撃、ちょんぼりすた、スロパチクエスト、当時実戦記事で一致。業界記事も8月上旬予定で整合。
- 設定別AT初当たり・機械割は一撃、ちょんぼりすた、スロパチクエスト、おスロおパチおいでやすの主要欄で一致。
- おスロおパチおいでやす同一ページ内に定義不明の別AT/出玉率表が併存するため `CONFLICT_PAGE_INTERNAL_ALTERNATE_AT_TABLE` として注記。複数一致値をcanonical採用。
- 設定変更専用短縮天井は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`（PSアドリブ王子）から再開**。既にresetBehavior収録済みなら重複編集せず次レコードへ進む。
- 既存 `COMPLETE_CORE` は不用意に崩さず、reset QAを別管理する。

## 2019-08-05群 — OPEN
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- 未処理候補: 麻雀格闘倶楽部参 / AT天元突破グレンラガン / ハイハイシオサイ / バンバンクロス

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1293を再取得。
2. **No.1294候補 `麻雀格闘倶楽部参`** から性能コア + resetBehavior v0.7収集を継続。
3. 続いて `AT天元突破グレンラガン / ハイハイシオサイ / バンバンクロス` を未処理順に個別照合。
4. 2019-08-05群を全メーカー / 別型式 / 別スペック / PB / 地域差まで監査しCLOSED可否を判定。
5. 遡及QAは `2007-02_ps-adlib-ouji.md` から再開。既収集なら重複せずGit追加順の次レコードへ進む。
6. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### パチスロあの日見た花の名前を僕達はまだ知らない。
- HAZUSE: https://hazuse.com/machine/pachislot/9S0405/
- P-WORLD: https://www.p-world.co.jp/machine/database/8970
- 一撃: https://1geki.jp/slot/s_anohana/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/86957/
- スロパチクエスト 天井/朝一: https://www.slopachi-quest.com/article/anohana-tennjou/
- 期待値見える化 朝一: https://slotjin.com/slot/anohana-reset/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/06/27/anohana_tenjou/
- グリーンべると: https://web-greenbelt.jp/00011313/
- P-WORLD業界ニュース / 遊技通信: https://news.p-world.co.jp/articles/11224/yugitsushin
