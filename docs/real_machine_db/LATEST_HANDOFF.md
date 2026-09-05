# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **682**
- latestMachineAdded: **ドンちゃん祭**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2012-08-20_donchan-matsuri.md`
- chronologicalFrontier: **2012-08-20**
- frontierLatestExactDateMachine: **ドンちゃん祭**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-08-20_SAME_DAY_AUDIT__NEXT_BOUNDARY_TO_2012-09-03**

## 今回の同期・時系列監査

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、2012-08-06最新群を確認して開始。
- 開始時正本は recordCount 681 / chronologicalFrontier 2012-08-06 / 08-06群CLOSED。
- 2012-08-07〜08-19境界を当時導入資料・2012年機種一覧・メーカー発表で再確認。08月後半の次の具体日付き候補としてエレコ「ドンちゃん祭」2012-08-20を確認。
- `docs/real_machine_db/machines/2012-08-20_donchan-matsuri.md` はmainに存在せず未登録を確認後、682件目として追加。
- 2012-09次候補は「おそ松くん」「クレアの秘宝伝～はじまりの扉と太陽の石～」の2012-09-03群を確認。ただし08-20同日残存候補を次回先に監査する。

## 今回の本線追加 — ドンちゃん祭

### 識別

- manufacturer: **エレコ / UNIVERSAL ENTERTAINMENT**
- releaseDate key: **2012-08-20**
- generation: **5号機**
- systemType: **ボーナス+セットストック型ART**
- modelName / approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割: **97.8 / 99.0 / 102.6 / 106.4 / 111.7 / 116.4%**
- BIG: **1/385 / 1/383 / 1/381 / 1/378 / 1/376 / 1/368**（後年整理値、追加照合余地あり）
- REG: **1/546 / 1/537 / 1/528 / 1/512 / 1/496 / 1/436**（同上）
- ボーナス合算: **1/226 / 1/223 / 1/221 / 1/217 / 1/214 / 1/199**
- ART初当り: **1/484.9 / 1/443.1 / 1/414.4 / 1/341.2 / 1/311.5 / 1/249.9**
- ボーナス+ART合算: **1/154.1 / 1/148.6 / 1/144.3 / 1/132.9 / 1/126.9 / 1/111.1**
- 50枚ベース: **約31G/50枚**（後年整理値）
- BIG: **約208枚** / REG: **約54枚**
- ART「お祭りゲーム」: **1セット30G、純増約+1.5枚/G、セットストック型**
- 天井: **ボーナス間1280Gで3兄弟モードART**。以降、次回ボーナスまで200Gごとに3兄弟モードARTストックとの当時解析。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL**。2012年当時資料で設定変更後も天井ゲーム数非リセット、内部モード移行抽選あり。
- `gameCounterReset`: **RETAIN_ON_SETTING_CHANGE_CONFIRMED_PERIOD_ANALYSIS**。
- `carryOverBehavior`: **CONFIRMED_PARTIAL**。当時資料で宵越し天井狙い可能。前日ボーナス間Gを利用可能。
- `powerCycleBehavior`: **PARTIAL**。天井進捗保持方向だが、電源OFF→ONのみを独立条件で明記した本機専用高信頼資料は未回収。
- `ceilingAfterReset`: **前日分を含めボーナス間1280G**。設定変更専用短縮天井なし。
- `modeAfterReset`: **REROLLED_CONFIRMED_NUMERIC_UNVERIFIED**。
- `stateAfterReset`: 低確/高確の存在は確認。変更時具体振分は**UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 前日天井進捗を失わず、高確スタートの可能性あり。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。ARTストック/高確状態処理は未確認。
- `resetDetection`: 朝一レア小役なしで「祭り会場」移行なら設定変更示唆とする当時情報。ガックンは未確認。
- `publicMorningNumbers`: 設定変更時モード移行率の専用解析項目の存在は確認したが本文数値を安全に回収できず未収録。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_RESEARCH**。性能側 `coreStatus: COMPLETE_CORE` は維持。

## 遡及resetBehavior QA 進捗

- handoff記載の次候補 `2006-12_linda-no-neraiuchi.md` を実ファイル確認し、既にresetBehavior収集済みのため重複更新せずスキップ。
- 以降tree実パス順で次を直接確認し、すべてresetBehavior既収集のためスキップ:
  - `2006-12_moeru-marine-battle.md`
  - `2007-01-08_battle-leaguer-x.md`
  - `2007-01-21_guruguru-bakusamurai.md`
  - `2007-01_aa-warera-nihonmatsu-judobu.md`
  - `2007-01_bijitoji.md`
  - `2007-01_im-juggler-ex.md`
  - `2007-01_janjan-nenju-motokkun.md`
- 既存COMPLETE_CORE/PARTIAL/CONFLICTはQA走査だけを理由に変更していない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。実ファイルを直接読み、resetBehavior欠損なら補完、既収集なら次へ進む。

## 次回再開地点

1. **recordCount 682 / chronologicalFrontier 2012-08-20**から開始。
2. **2012-08-20同日群の残存監査**を先に実施し、未登録機があれば同日キーで追加。
3. 同日群を閉じられたら **2012-08-21〜09-02境界監査**へ進む。
4. 現時点で確認できている次の具体日付き群は **2012-09-03**。「おそ松くん」（サンスリー）と「クレアの秘宝伝～はじまりの扉と太陽の石～」（大都技研）。より古い未登録がないことを確認してから進む。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` からtree実順で継続。
6. PARTIAL/UNVERIFIED/reset欠損は検索語・資料系統を変えて十分再探索。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

- Universal公式発表転載 / @Press: `https://www.atpress.ne.jp/news/29284`
- 4Gamer メーカー発表転載: `https://www.4gamer.net/games/180/G018057/20120820046/`
- K-Navi ドンちゃん祭: `https://p-kn.com/slot/1658/`
- P-WORLD ドンちゃん祭: `https://www.p-world.co.jp/machine/database/6759`
- 天井ハイエナ生活 2012-08-25: `https://macerate.seesaa.net/article/288333617.html`
- みんスロ ドンちゃん祭: `https://minslo.com/%E3%83%89%E3%83%B3%E3%81%A1%E3%82%83%E3%82%93%E7%A5%AD/`
- ALL7.jp 2012年9月導入予定一覧: `https://www.all7.jp/plans/index/2012/09`
- K-Navi クレアの秘宝伝: `https://p-kn.com/slot/1694/`

## GitHub commits

- ドンちゃん祭 machine record: `8a0b9d1689b59fe473b08ec053d3604632a0eff2`
