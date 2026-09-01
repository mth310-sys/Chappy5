# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは210件地点（`名門!夢色学園生徒会` 追加済み）。
- 2007-12-01〜12-16境界をメーカー公式、メーカー別5号機一覧、P-WORLD、K-Navi、当時業界記事、旧解析で再監査。
- サミー公式製品一覧でロデオ `バーチャファイターT` の **2007.12** を確認し、main未登録も確認。
- 具体納品日は再探索しても確定できなかったが、月単位候補を未処理のまま飛ばさないルールに従い、**211件目として `バーチャファイターT` を追加済み。**

## 211. バーチャファイターT

- new record: `docs/real_machine_db/machines/2007-12_virtua-fighter-t.md`
- commit: `e90d9d0d7c868a8ee06707612ba5db711c863937`
- manufacturer: ロデオ
- generation: 5号機
- releaseDate: `2007-12`（サミー公式。日単位はUNVERIFIED）
- systemType: ボーナス + CZ + 完走型RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・同定

- サミー公式パチスロ製品一覧で `バーチャファイターT`、ロデオ、`2007.12` を確認。
- グリーンべると2007-10-26記事で、ロデオ製『バーチャファイター』の発表展示会を11/1からフィールズ全国拠点で開始、完走型RTループタイプと確認。
- `納品 / 導入 / ホール導入 / 12月` まで検索語を変更したが、具体的な納品開始日/ホール導入日は高信頼資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- K-Navi BIG合算: `1/399.6 / 1/381.0 / 1/364.1 / 1/348.6 / 1/334.4 / 1/309.1`。
- K-Navi REG合算: `1/799.2 / 1/762.1 / 1/728.2 / 1/697.2 / 1/668.7 / 1/618.3`。
- 全ボーナス合算は5号機まとめwikiで `1/266 / 1/254 / 1/243 / 1/232 / 1/223 / 1/206`。K-Navi値からの合算と丸め範囲で整合。
- 機械割はK-Navi `96.2 / 98.6 / 101.0 / 104.8 / 109.2 / 114.1%`、5号機まとめwiki `96.3 / 98.7 / 101.0 / 104.9 / 109.2 / 114.1%`。平均せず `CONFLICT_ROUNDING_OR_DEFINITION`。
- 同色BIG平均純増約315枚、異色BIG/MIDDLE約210枚、REG約56枚。
- 全ボーナス後CZ。特殊リプレイ先行で44G完走型RT `最終決戦ステージ`。
- RT純増約 `+0.7枚/G`、グリーンべるとではRT突入＋継続＋ボーナスのVFL期待値約70%。
- 通常状態300Gで周期CZ。
- 比較可能な50枚ベースは `50枚 / 1000円 / ベース / コイン持ち` を変えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。小役確率から独自逆算しない。

### v0.7 resetBehavior

- settingChangeBehavior: 5号機まとめwikiに **「RAMクリアしない限り設定変更してもG数は引き継ぐ」** と明記。通常時300G周期CZカウンタは通常の設定変更だけではリセットされない。
- carryOverBehavior: 通常時周期G数は同解析のRAMクリア条件から引継ぎ側を支持。ただしCZ/RT残G・状態の据え置き専用直接記述は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみの周期G数/CZ/RT状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 周期CZは通常状態300G。設定変更のみでは引継ぎ `CONFIRMED_ANALYSIS`。
- ceilingAfterReset: 設定変更時短縮周期/短縮天井/朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/設定変更時公開モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: 通常時周期G数引継ぎは確認済み。CZ中/44G RT中の変更・据え置き・電断時状態/残Gは `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits: 設定変更でも周期G数を引き継ぐため、朝一の周期CZ狙いに影響し得る。設定変更専用追加優遇は `NONE_CONFIRMED`。
- resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 周期G数が設定変更でリセットされないため、周期到達だけでは変更/据え置きを単純判別できない。本機固有ガックン等は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 通常時周期CZ `300G`、設定変更のみならカウンタ引継ぎ。

### CONFLICT / missing

- 機械割: K-Naviと5号機まとめwikiで設定1/2/4に0.1pt差。平均化せず双方保持。
- 未確定: 具体導入日、正式型式名、50枚ベース、CZ/RT中の変更/据え置き/電断処理、電源OFF→ONのみの周期カウンタ処理、本機固有変更判別。

主要出典:
- サミー公式: https://www.sammy.co.jp/japanese/products/pachislot/index.html
- グリーンべると: https://web-greenbelt.jp/00006462/
- K-Navi: https://p-kn.com/slot/732/
- P-WORLD: https://www.p-world.co.jp/machine/database/4976
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/46/a.php
- 5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/75.html
- SLONET旧攻略: https://slonet.sakura.ne.jp/kouryaku/virtuafighter.html

## 直前の210件目

### 名門!夢色学園生徒会

- record: `docs/real_machine_db/machines/2007-12-02_meimon-yumeiro-gakuen-seitokai.md`
- commit: `c0d8b2a5dbe6675aeb6c9f5f6295a5a7ec070243`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 当時業界記事で2007-12-02納品開始。

## resetBehavior 遡及QA

- `じゃりン子チエ（2006-08）` まで遡及追加済み。
- 新規キューを止めず、次回以降に時系列で次の未補完既存レコードも監査する。

## 重複防止

- `NEO花物語`: 既存レコードあり。再追加禁止。
- `スーパービンゴV`: 既存レコードあり。再追加禁止。
- `CANスロ`: 既存レコードあり。再追加禁止。
- `パチスロ「機動戦士ガンダムII～哀・戦士編～」`: 208件目として追加済み。
- `パチスロシティーハンター`: 209件目として追加済み。
- `名門!夢色学園生徒会`: 210件目として追加済み。
- `バーチャファイターT`: 211件目として追加済み。

## 次回再開地点

1. **LATEST_HANDOFF基準211件地点から継続。**
2. 2007-12-01〜12-16境界監査を続行。月単位未処理候補 `ぴかっとシーサー / バミューダ / サンバ×サンバ / 学習パチスロ理科 / まぁさん` と、`バーチャファイターF` の実導入時期をメーカー公式・当時業界・P-WORLD旧DBで再比較する。
3. サミー公式一覧では `バーチャファイターT=2007.12` を確認した一方、同一覧の `バーチャファイターF` 表示は周辺項目との対応を再確認してから採用する。K-Naviでは2007-12-19にF発売決定記事があるため、T/Fを同一日扱いしない。
4. 具体日が確定している後続候補: `ダイナマイトリターンズ` はK-Naviで2007-12-17ホール導入予定、`ハナマル!学園奮闘記!` はK-Naviで12/17導入予定・グリーンべるとで12/16納品開始、`パンドラ` は12/25設置開始候補。境界監査後に最古から進める。
5. `ぴかっとシーサー` はデンケン販売5号機一覧で2007/12、機械割101.4〜111.4%まで先行確認。具体日・性能コア・resetBehaviorを次回優先監査する。
6. 新規機種は性能コア + v0.7 resetBehaviorを同時収集。欠損は表記揺れ・型式・メーカー・シリーズ、設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間まで検索語を変え、別系統資料を横断した後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
