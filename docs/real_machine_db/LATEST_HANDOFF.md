# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは207件地点（華一番 / 華一番-30追加済み）。
- 直前handoffの境界監査メモに「NEO花物語 / スーパービンゴVがmain未収録」とあるが、最新main再検索・ファイル取得で両機とも既存レコードを確認したため、この未収録判定は stale として訂正。重複追加しない。
- 2007年12月1〜5日を再監査し、main未収録かつ具体日を当時資料で確定できた最古候補として `パチスロ「機動戦士ガンダムII～哀・戦士編～」` を処理。
- **208件目として `パチスロ「機動戦士ガンダムII～哀・戦士編～」を追加済み。**

## 208. パチスロ「機動戦士ガンダムII～哀・戦士編～」

- new record: `docs/real_machine_db/machines/2007-12-03_mobile-suit-gundam-ii-ai-senshi.md`
- commit: `b5e3ca63f3e0de363b559bf63f28e879b859961a`
- manufacturer: 山佐
- generation: 5号機
- systemType: ボーナス + 完走型RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・型式

- 型式名: `機動戦士ガンダム2-C`。
- グリーンべると2007-11-30記事: `2007-12-03` から稼働開始と明記。
- HAZUSE: 導入開始日 `2007-12-03`。
- K-Navi 2007-09-15発表会記事: ホールデビュー12月上旬予定。
- P-WORLDはページ下部で導入開始 `2007年11月` とするため `CONFLICT_DATE_MONTH`。具体日の当時業界記事を優先し12/3採用。

### 性能コア

- 青7BIG: `1/468.1 → 1/461.5`
- 赤7BIG: `1/809.1 → 1/425.6`
- BIG合成: `1/296.5 → 1/221.4`
- REG: `1/612.5 → 1/319.7`
- ボーナス合成: `1/199.8 → 1/130.8`
- 機械割: `97.5 / 99.5 / 101.5 / 104.0 / 107.5 / 111.0%`
- 1000円ベース: `35.28 / 35.31 / 35.34 / 35.53 / 35.92 / 36.43G`
- 青7BIG約300枚 / 赤7BIG約180枚 / REG最大82枚。
- BIG後は必ず78G完走型RT `Gエピソード`。純増約 `+0.3枚/G`、完走時約23枚。
- 設定3赤7BIGのみHAZUSE `1/642.5` / P-WORLD `1/642.2` の微差があり `CONFLICT_DETAIL`。

### v0.7 resetBehavior

- settingChangeBehavior: 設定変更時の78G RT残G・内部RT・成立済みボーナス・リール初期挙動は `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時のRT残G/内部RT状態は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ON時のRT残G/内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。78GはBIG後RT継続G数でありハマリ天井ではない。
- ceilingAfterReset: 短縮天井/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/公開変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: Gエピソード中の変更/電断時残状態処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開朝一固有恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/液晶・ランプ等による変更判別 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開設定変更時専用数値なし確認。

主要出典:
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2532/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/7S0680/
- P-WORLD: https://www.p-world.co.jp/machine/database/4934
- パチマガスロマガ 小役/1000円ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/154/c.php
- K-Navi発表会: https://p-kn.com/topics/exhibition/186/

## resetBehavior 遡及QA

### じゃりン子チエ（2006-08）

- QA record: `docs/real_machine_db/machines/2006-08_jarinko-chie.md`
- QA commit: `37577b33bcf0bafe7accd4cff7d807fd47899f6f`
- 既存性能 `PARTIAL` は維持し、v0.7 `resetBehavior` を別管理で追加。
- 設定変更/据え置き/電源OFF→ON時の100G/50G完走型RT残G・内部RT状態は、表記揺れ・型式 `じゃりン子チエSP`・メーカー名・朝一/リセット/ガックン/据え置き/電断を組み替えて再探索したが直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 100G/50Gはボーナス後RT継続G数であり通常時天井ではない。通常時ハマリ天井、短縮天井、朝一専用モード、公開朝一恩恵/不利、公開専用数値は `NONE_CONFIRMED`。
- 後継 `じゃりン子チエ 雷蔵伝説` はART/天井搭載の別仕様なので流用しない。
- QA再探索で既存欠損性能を追加回収: 1000円ベース `44.06G`、RT純増 `+0.06枚/G`、RT中リプレイ `1/1.87`、RT中ハズレ約 `1/3.48`。
- 設定別総ボーナス成立確率表は未確定のため `coreStatus=PARTIAL` のまま。

主要出典:
- グリーンべると: https://web-greenbelt.jp/00004714/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/46/a.php
- パチマガスロマガ 小役/RT/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/46/c.php
- パチマガスロマガ 設定推測: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/46/i.php
- ITmedia: https://www.itmedia.co.jp/mobile/articles/0701/31/news098.html

## 直前の既存確認・重複防止

- `NEO花物語`: 最新mainに `docs/real_machine_db/machines/2007-11-12_neo-hana-monogatari.md` が存在。再追加禁止。
- `スーパービンゴV`: 最新mainに `docs/real_machine_db/machines/2007-11-19_super-bingo-v.md` が存在。再追加禁止。
- `CANスロ`: 最新mainに `docs/real_machine_db/machines/2007-10-29_can-slot.md` が存在。再追加禁止。
- `パチスロ「機動戦士ガンダムII～哀・戦士編～」`: 今回追加済み。

## 次回再開地点

1. **LATEST_HANDOFF基準208件地点から継続。**
2. 2007-12-03同日〜12-05の未処理機をメーカー別一覧・導入カレンダー・当時業界記事で最終監査。
3. それより早い未処理機がなければ、main未収録を確認済みの `パチスロシティーハンター` を優先。グリーンべると2007-11-09記事で **2007-12-06納品開始予定** を確認済み。
4. `パチスロシティーハンター` は性能コア + v0.7 resetBehaviorを同時収集し、設定変更/据え置き/電断、ゲーム数/天井、モード/状態、朝一恩恵/不利、変更判別、公開朝一数値まで資料系統を変えて探索する。
5. resetBehavior遡及QAは `じゃりン子チエ` の次の未補完既存レコード **`ランブルローズ`（2006-08）** から再開。最新mainでresetBehavior節未収集を確認済み。
6. その後 `逮捕しちゃうぞ` 等を時系列に走査し、既補完済み機は重複改変しない。
7. 既存 `COMPLETE_CORE` は性能完了判定を不用意に崩さず、resetBehaviorQAを別管理する。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
