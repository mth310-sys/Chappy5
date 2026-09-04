# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **582**
- latestMachineAdded: **ハネスロ林家一家**（オーイズミ / 2011-06-26納品開始予定）
- latestRecord: `docs/real_machine_db/machines/2011-06-26_haneslo-hayashiya-ikka.md`
- chronologicalFrontier: **2011-06-26**
- frontierLatestExactDateMachine: **ハネスロ林家一家**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、581件目「プロゴルファー猿」を再取得して開始。
- `INDEX.md` は旧情報（19件/2006年時点）を含むため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 2011-06-20同日群および2011-06-21〜06-25境界を再監査。直前HANDOFFの次候補 **ハネスロ林家一家** をrepo検索して未登録と確認し、582件目として追加。
- 当時グリーンべると/P-WORLD業界ニュースが **2011-06-26から納品開始予定**と明記。後年中古実機DBの「2011年6月導入開始」とも月単位で整合。

## 今回追加 — 582 ハネスロ林家一家

- メーカー: **オーイズミ**
- 5号機 / **A+ART・ボーナス高確率型 + 押し順ART + 天井無限ART**
- 機械割: **96.9 / 98.3 / 100.0 / 103.1 / 106.8 / 110.2%**。
- ボーナス合成: **1/98.55 / 1/96.80 / 1/95.12 / 1/93.09 / 1/91.15 / 1/89.29**。
- 大ボーナス: 全設定共通 **1/689.85**。
- 中ボーナス: 全設定共通 **1/397.19**。
- 小ボーナス: **1/161.82 / 1/157.16 / 1/152.76 / 1/147.60 / 1/142.78 / 1/138.26**。
- 1000円あたりゲーム数: **34.75 / 34.85 / 34.95 / 35.00 / 35.00 / 34.95G**。
- ART「ブンブンモード」: **約+1.2枚/G、1セット最低50G**。
- ボーナス純増: **大約150枚 / 中約100枚 / 小約50枚**。
- 通常救済天井: **596Gハマリで無限ART**。
- 連続スルー救済: **9回連続ART未突入で次回ボーナス時に無限ART保証**。
- ボーナス中フリーズ: 無限ART確定、その次回ボーナス時は **85%**で無限ART継続。

### resetBehavior v0.7 — 582

- `settingChangeBehavior`: パチマガスロマガに本機専用「朝イチ・設定変更」解析項目の存在までは確認したが、本文値を回収できず **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: 据え置き時の596G進捗、ART非突入連続回数等の保持を直接示す本機固有本文は回収できず **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: 単純電源OFF→ON時は **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: 596G天井は確認済みだが、設定変更時のCLEAR/RETAINは **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: 設定変更専用の短縮天井/朝一天井は本文値を確定できず **UNVERIFIED_AFTER_RESEARCH**。NONEと断定しない。
- `modeAfterReset`: 朝一客行動に影響する長期通常モードは確認できず。設定変更時処理も **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: 設定変更時限定の高確・短縮・ART優遇等は **UNVERIFIED_AFTER_RESEARCH**。
- `resetPenalties`: 前日596G進捗/ARTスルー回数消失の可能性を一般則で補完せず **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: ガックン/初期出目/液晶表示等は **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一数値: 設定変更専用当選率/期待度は **UNVERIFIED_AFTER_RESEARCH**。

## 主要出典 — 582（取得日 2026-09-04）

- P-WORLD業界ニュース / グリーンべると「シリーズ初のART機『ハネスロ林家一家』登場」
  - `https://news.p-world.co.jp/articles/4666/greenbelt`
  - 2011-06-26納品開始予定、ART約+1.2枚/G・最低50G、ボーナス50/100/150枚、ボーナス約1/98〜1/89、596G無限ART、9回連続ART未突入救済
- パチマガスロマガ「ボーナス抽選確率」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/h-1.php`
  - 設定別PAYOUT、ボーナス合成、大/中/小個別確率
- パチマガスロマガ「小役確率」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/c.php`
  - 1000円あたり34.75/34.85/34.95/35.00/35.00/34.95G
- パチマガスロマガ「基本システム」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/a.php`
  - ART約+1.2枚/G・50G、596G/ART9回救済、フリーズ時無限ART、次回85%継続
- パチマガスロマガ 機種トップ
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/26/oizumi_slot_26.php`
  - 本機専用「朝イチ・設定変更」項目の存在

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、怪胴王直後の実machine pathをtree順に直接確認し、最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 582 / chronologicalFrontier 2011-06-26**。最新main README / mission / INDEX / LATEST_HANDOFF / 581・582レコードを再取得。
2. **2011-06-26同日群を最終監査して閉じる**。ハネスロ林家一家は登録済みなので重複しない。
3. 同日群に未登録がなければ **2011-06-27同日群**へ進む。
4. 最優先候補は **スカイラブ3（SNKプレイモア）**。パチビーに **2011-06-27導入日**の具体日あり。repo未登録を確認してから583件目候補とする。
5. **プロゴルファー猿**はK-Navi側が2011-06-27ホール導入開始だが、既に581件目として登録済みなので重複追加しない。06-20/06-27はCONFLICT_EXACT_DATEのまま維持。
6. 2011年6月機として「パチスロ 笑ゥせぇるすまん」等も存在するため、6/27周辺の具体日を再探索してスカイラブ3より前/同日の機種を飛ばさない。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、公式/業界/当時解析/旧DB/アーカイブ/回顧資料を横断した後だけ残す。CONFLICTは平均しない。
