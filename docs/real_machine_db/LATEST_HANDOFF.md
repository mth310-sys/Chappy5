# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **651**
- latestMachineAdded: **パチスロ マクロスフロンティア はじまりの歌、銀河に響け！**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2012-04-16_macross-frontier-hajimari-no-uta-ginga-ni-hibike.md`
- chronologicalFrontier: **2012-04-16**
- frontierLatestExactDateMachine: **パチスロ マクロスフロンティア はじまりの歌、銀河に響け！**
- schema: **resetBehavior v0.7**
- status: **2012-04-16_GROUP_OPEN__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード（一騎当千3 Valiant Venus）を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時はrecordCount 650 / frontier 2012-04-16 / 一騎当千3 Valiant Venus。
- 直前handoff指定の最優先候補「パチスロ マクロスフロンティア はじまりの歌、銀河に響け！」をrepo code searchで未登録確認し、651件目として追加。
- 2012-04-16同日群はまだ閉じない。`ねぇ～ねぇ～島娘` は4/16と4/23の資料差、`ToHeart2 バカンスバージョン` は本体2012-02-20既登録との別型式/別スペック判定が必要。

## 今回の本線追加 — パチスロ マクロスフロンティア はじまりの歌、銀河に響け！

### 導入日・型式

- 時系列キー: **2012-04-16**。
- K-Naviが2012-04-16ホール導入開始、SANKYO公式オンライン博物館が2012.04、当時グリーンべるとが4月15日納品開始として整合。
- manufacturer: **SANKYO**。
- formalModelName: **パチスロ マクロスフロンティア はじまりの歌、銀河に響け！A**（SANKYO公式）。
- approvalNumber: 今回の再探索では安全に確定できず **UNVERIFIED_AFTER_RESEARCH**。

### 性能コア

- systemType: **5号機 ボーナス+ART / ゲーム数上乗せ+セットストック式ART / CZ搭載**。
- 機械割: **96.4 / 98.5 / 100.8 / 104.6 / 108.8 / 113.1%**。
- SANKYO公式/P-WORLD一致の主系列:
  - BIG合算: **1/496 / 448 / 481 / 425 / 468 / 404**
  - REG: **1/744 / 675 / 728 / 655 / 712 / 636**
  - BONUS合算: **1/297 / 269 / 289 / 258 / 282 / 247**
  - ART初当り: **1/430 / 341 / 385 / 301 / 332 / 245**
  - BONUS+ART合算: **1/175 / 150 / 165 / 138 / 152 / 123**
- ART「バルキリータイム」: **基本40G+α / 約+1.5枚/G**。
- 超時空BONUS/アルトBIG **約252枚**、ランカ/シェリルBIG **約204枚**、REG **約45枚**。
- 天井: **ボーナス間1499G → 超時空ライブ確定**。
- 通常のテーブル用消化Gは**ボーナス当選のみでリセット**され、ART当選ではカウント継続。
- 50枚ベースは公式・P-WORLD・K-Navi・パチマガスロマガ索引・5号機クロニクル・後年攻略PDFまで検索語を変えて再探索したが比較可能な直接数値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### CONFLICT

- **主要初当り系列に大きな競合あり**。
- SANKYO公式/P-WORLD/八通屋攻略PDFは設定1例で BIG1/496・REG1/744・BONUS合算1/297・ART1/430。
- 5号機クロニクルは設定1例で BIG1/399.6・REG1/712.4・BONUS合算1/256.0・ART1/359.1。
- 機械割は両系列で一致するが、初当りは丸め差ではない。定義差を安全に解消できないため、**公式系列を主値、別系列をCONFLICT保持**。平均化しない。
- 5号機クロニクルの「超BIG約250/BIG約180/REG約40枚」は概略値、P-WORLDの252/204/45枚はボーナス種別実純増。定義を分け、主値は種別値。

### resetBehavior v0.7

- パチマガスロマガ本機索引に**「朝イチ・設定変更」専用攻略項目の存在**は確認できた。
- ただし現存検索取得可能な本文から、設定変更時の天井/テーブルGクリア・引継ぎ、内部状態、モード振り分け、朝一数値を直接回収できなかった。
- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに宵越しを示唆するユーザー実戦ログはあるが解析根拠としては不採用。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: 通常遊技中は「テーブル用G数はボーナス当選のみリセット、ART当選では継続」を確認。ただし**設定変更時**の1499G天井/テーブルG処理は **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset` / `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ステージ、前兆G等の確定資料を確認できず。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 後継「マクロスフロンティア2」「Bonus Live ver.」「マクロスフロンティア4」の朝一仕様は別機種なので流用していない。

## 時系列監査 / 次回再開地点

1. **recordCount 651 / chronologicalFrontier 2012-04-16**から開始。
2. **2012-04-16同日群を継続監査**する。
3. 最優先候補: **ねぇ～ねぇ～島娘**。前handoffでDK-SIS系4/16導入開始扱いとK-Navi系4/23表記の差が確認されているため、メーカー/業界/当時解析を再照合し、日付定義差またはCONFLICTを明示して新規登録判断する。repo検索では今回時点で同名登録なし。
4. 同日候補 **ToHeart2 バカンスバージョン** は当時系一覧に4/16表記。本DBには `ToHeart2` 本体が2012-02-20で既登録のため、別型式・別スペックの実在販売機か、単なる再販/地域導入日差かを型式資料で確認してから独立レコード化判断。repo検索では「ToHeart2 バカンス」名の登録なし。
5. 04/16群の候補を閉じるまでは次日へ飛ばさない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックン/50枚を組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/543/`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5230/greenbelt`
- K-Navi: `https://p-kn.com/slot/1610/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6675`
- パチマガスロマガ本機索引: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/27/sankyo_slot_27.php`
- 5号機クロニクル SANKYO: `https://5goki.com/sankyo`
- 八通屋攻略PDF: `https://www.8tw.com.tw/rwd1540/store/F2/S0054%E3%80%90%E8%B6%85%E6%99%82%E7%A9%BA%E8%A6%81%E5%A1%9E%E3%80%91%20%E6%9C%80%E5%88%9D%E4%B9%8B%E6%AD%8C%E3%80%81%E9%9C%87%E9%9F%BF%E9%8A%80%E6%B2%B3%E7%B0%A1%E6%98%93%E7%89%88%E6%94%BB%E7%95%A5.compressed.pdf`

## GitHub commits

- パチスロ マクロスフロンティア machine record: `760969c081590de60fd9d0fb60ef111b7bf7ece3`
