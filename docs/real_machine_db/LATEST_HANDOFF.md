更新日: 2026-09-11

## 現在地点
- recordCount: **1290**
- latestRecordAdded: **咲桜弁慶**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-06-17_sakura-benkei.md`
- chronologicalFrontier: **2019-06-17**
- frontierLatestMachine: **咲桜弁慶 — No.1290**
- schema: **resetBehavior v0.7**
- status: **2019-06-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1289を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1290 `咲桜弁慶` を性能コア + resetBehavior v0.7で登録。
- 2019-06-17群は `スーパードラゴン` / `咲桜弁慶` を確認。別メーカー・別型式・延期日・当時導入カレンダーを再監査し、追加固定なしとしてCLOSED。
- 2019-06-18〜07-07境界を先行監査し、次の確定スロット導入群として2019-07-08 `ガールズ＆パンツァーG` を次候補に保持。

## No.1290 — 咲桜弁慶
- manufacturer: **ボーダー（Border）**
- formalModel: **`サクラベンケイ2`**
- certificationNumber: **`8S0064`**
- generation/system: **5.9号機 / ノーマルA / BIG+REG**
- releaseDate: **2019-06-17**
- 機械割: **97.17 / 99.02 / 100.58 / 103.13 / 106.03 / 110.36%**
- BIG: **1/452.0 / 439.8 / 434.0 / 417.4 / 385.5 / 362.1**
- REG: **1/485.5 / 474.9 / 458.3 / 436.9 / 407.1 / 362.1**
- 合算: **1/234.1 / 228.3 / 222.9 / 213.5 / 198.0 / 181.0**
- baseGamesPer50: **公開レンジ約41.9〜47.1G**。設定別表を固定できず算術配分しない。
- BIG最大402枚 / REG104枚。
- 天井・ゲーム数ゾーン非搭載。

### resetBehavior v0.7
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- settingChange / carryOver / purePowerCycle: 機種固有の内部状態契約を十分再探索したが直接固定できず、3条件を独立UNVERIFIEDで保持。
- gameCounter / ceilingAfterReset: 天井非搭載のためNOT_APPLICABLE。
- advantageousSection: ボーナスのみで出玉を増やす5.9号機ノーマル。主要資料で有利区間を使うAT/ART機能なし。
- resetBenefits: モゲスロは天井・ゾーン・リセット性能を整理し「リセット恩恵なし」と明記。
- resetDetection: ガックン・初期出目・ランプ等の本機固有確定条件/発生率は固定できず。
- publicMorningNumbers: 設定変更専用の公開比較数値は固定できず。

## qualityNotes / conflicts
- 導入日は当初2019-05-12/13予定とする当時資料があるが、その後2019-06-17へ延期。複数解析・導入カレンダーが6/17で一致するためcanonicalは2019-06-17。予定変更として保持し、誤った競合平均はしない。
- 型式 `サクラベンケイ2` / 検定番号 `8S0064` は東京都公安委員会検定通過情報の業界転載とHAZUSEで一致。
- 50枚ベースは41.9〜47.1Gの公開レンジのみ固定。設定別対応を推定しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- PIKASLOは既にresetBehavior収録済みのため重複編集せず通過。
- `docs/real_machine_db/machines/2007-02_skylove.md` を再探索・正式QA更新。
- スカイラブは既存 `coreStatus: COMPLETE_CORE` を維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED`。
- 新規固定: 後年整理資料で **設定変更時はCZスタート**。朝一にチェリーより先にベル成立→RT突入なら設定変更可能性が高まる、という弱〜中程度の判別材料を確認。確定条件や数値には昇格させない。
- 据え置き / 純電断時のCZ・RT状態、変更前RT残G等は機種固有の直接契約を固定できず、別条件UNVERIFIEDを維持。
- `docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md` は既にresetBehavior項目が存在することを確認。性能 `COMPLETE_CORE` は触らない。次回はこのレコードから順次、QA状態の再評価/不足補完を継続する。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`（PSアドリブ王子）から再開**。既収集なら重複せずGit追加順の次レコードへ進む。

## 2019-06-17群 — CLOSED
- No.1289 スーパードラゴン
- No.1290 咲桜弁慶

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1290を再取得。
2. 2019-06-18〜07-07境界を再確認後、**2019-07-08 `ガールズ＆パンツァーG` をNo.1291候補**として性能コア + resetBehavior v0.7を本調査。
3. 同日群を全メーカー / 別型式 / 別スペック / PB / 地域差まで監査。
4. 遡及QAは `2007-02_ps-adlib-ouji.md` から再開。既存COMPLETE_COREは不用意に崩さずreset QAを別管理。
5. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### 咲桜弁慶
- 遊技通信web 東京都公安委員会検定通過状況: https://www.yugitsushin.jp/news/gyousei/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%882%E6%9C%8812%E6%97%A5%EF%BC%89-2/
- HAZUSE: https://hazuse.com/machine/pachislot/8S0064/
- 一撃: https://1geki.jp/slot/s_sb/
- ちょんぼりすた: https://chonborista.com/slot/border/81327/
- グリーンべると: https://web-greenbelt.jp/00011192/
- モゲスロ: https://moge-site.com/archives/21994
- 導入カレンダー: https://crankyseven.com/newmachine-info.htm

### スカイラブ resetBehavior QA
- P-WORLD: https://www.p-world.co.jp/machine/database/4529
- パチマガインターネット: https://psmaga.com/database/machine/slot_index.php?id=5708
- パチマガスロマガ旧攻略: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/10/a.php
- パチ7回顧: https://pachiseven.jp/articles/detail/11235
- slot-games.online: https://slot-games.online/slot/skylove.html
