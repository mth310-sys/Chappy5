# パチスロ らんま1/2

machineName: パチスロ らんま1/2
manufacturer: SANKYO
releaseDate: 2013-02-04
releaseDatePrecision: exact_day
releaseDateNotes: SANKYO公式オンライン博物館は2013.02導入。K-Navi月間カレンダー/当時導入資料では2013-02-04群。P-WORLD現行DBは2013年01月表記のため月表記競合を保持し、具体日付き当時カレンダー系列を時系列キーに採用。
generation: 5号機
systemType: ART / 擬似BIG・REG / ゲーム数解除+自力CZ / 獲得枚数管理型ART
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## identity

- P-WORLD型式名: **パチスロ らんま1／2S**。
- P-WORLD検定番号: **2S1179**。
- SANKYO公式オンライン博物館で2013.02導入・SANKYOブランドを確認。
- confidence: OFFICIAL_PLUS_INDUSTRY_DB

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.5% |
| 3 | 100.7% |
| 4 | 105.0% |
| 5 | 110.6% |
| 6 | 113.5% |

- P-WORLD、後年攻略整理、楽曲/機種回顧資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 擬似ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/242.7 |
| 2 | 1/227.8 |
| 3 | 1/233.5 |
| 4 | 1/206.8 |
| 5 | 1/214.6 |
| 6 | 1/181.1 |

### 擬似BIG

| 設定 | BIG |
|---|---:|
| 1 | 1/357.7 |
| 2 | 1/334.9 |
| 3 | 1/343.0 |
| 4 | 1/298.1 |
| 5 | 1/308.4 |
| 6 | 1/253.9 |

### 擬似REG

| 設定 | REG |
|---|---:|
| 1 | 1/754.6 |
| 2 | 1/712.3 |
| 3 | 1/731.6 |
| 4 | 1/674.8 |
| 5 | 1/705.7 |
| 6 | 1/630.9 |

- PREMIUM REGULAR BONUSは全設定1/32768。
- P-WORLDとSANKYO公式掲載スペック系列で確認。
- ART「闘校チャンス」そのものの設定別初当たりは今回、定義の揃った直接表を確定できず **UNVERIFIED_AFTER_RESEARCH**。疑似ボーナスを主要初当たり系列として保持。
- 当時スロスター掲載の「無差別バトル初当り」1/287.9～1/209.0はCZ初当たりでありART初当たりと混同しない。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_FOR_PSEUDO_BONUS

## baseGamesPer50

- 2012-12当時のスロスター新機種記事: **約32G/1000円**。
- 「50枚/1000円/千円/1K/ベース/コイン持ち」を機種名・型式・SANKYOと組み替えて再探索したが、同じ2013年SANKYO機を明示した別の直接比較値は今回確定できず、単一当時資料値として採用。
- 2018年EXCITE版「らんま1/2」の47.4～54.9G/50枚および50.7G表記は別機種のため混入禁止。
- confidence: ANALYSIS_SINGLE_PERIOD

## netIncrease

- ART「闘校チャンス」: **約+2.0枚/G**。
- SANKYO公式、P-WORLD、2013-01当時業界記事、パチマガスロマガで一致。
- confidence: OFFICIAL_PLUS_MULTI_SOURCE

## basicPayout

- ART「闘校チャンス」: **1セット120枚+α**、獲得枚数管理型。
- 擬似BIG: ナビ20/30/40/50回+α。2013-01当時業界記事では平均約200枚。
- 擬似REG: ナビ10回固定。当時業界記事では平均約60枚。
- PREMIUM REGULAR BONUS: 10G、P-WORLDで純増60枚。
- P-WORLD/当時業界記事/パチマガスロマガで主要構造を照合。

## modeSpecificMinimumData

### 通常モード / 天井

- 通常時は **通常A / 通常B / 天国** の3モードで規定ゲーム数解除を管理。
- 通常A・通常B: **最大999G**。
- 天国: **最大100G**。
- パチマガスロマガでは通常Aの200～299G/400～499G、通常Bの300～399G/500～599G/900～999Gがチャンスゾーンとして掲載。
- 天国ループ率は2012-12当時スロスター記事で **約50%** と説明されるが、これは通常時の一般モード性能でありリセット専用数値ではない。
- confidence: ANALYSIS_HIGH_FOR_MODE_STRUCTURE_AND_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__SETTING_CHANGE_COUNTER_CLEAR_CONFIRMED__MODE_STATE_SUEOKI_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更で **天井ゲーム数リセット**を確認。
- 設定変更時の通常A/B/天国の具体振り分け、内部高確の具体再抽選率は、機種名/型式名/SANKYOと「設定変更/リセット/朝一/モード移行率/通常A/通常B/天国/高確」を組み替え、当時解析・後年攻略DBまで再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 純据え置き時の天井進捗、通常A/B/天国、内部高確の保持契約を独立条件で直接明記する本機固有の高信頼資料は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機慣行から補完しない。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時の天井ゲーム数、モード、内部高確、液晶開始ステージの保持/初期化は、本機固有資料を再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更時は前日までの天井進捗をクリア。
- 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常モードA/B最大999G、天国最大100Gは通常モード仕様であり、朝一専用短縮天井として扱わない。

### modeAfterReset

- 通常A/B/天国の3モード存在は確認済み。
- 設定変更時のモード再抽選の具体振り分け、朝一専用モードの存在は **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 通常時に内部高確が存在し、「通学路/風林館高校/天道家」等で示唆することはP-WORLDで確認。
- 設定変更時の高確/通常の再抽選・引継ぎ契約および開始ステージは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の天井短縮、天国優遇率、高確スタート率、CZ/ART優遇率など比較可能な公開恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日の規定ゲーム数/天井進捗が消失。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、朝一ゲーム数挙動による設定変更/据え置き判別は、「ガックン/変更判別/朝一/初期出目/据え置き」を表記変更して再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeGameCounter: **CLEAR_CONFIRMED**。
- normalModeA_BCeiling: **999G max**。
- heavenCeiling: **100G max**。
- resetSpecificModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- settingChangeGameCounter: CLEAR_CONFIRMED
- normalModeABCeiling: 999G_MAX
- heavenCeiling: 100G_MAX
- resetSpecificCeilingReduction: NONE_CONFIRMED_AFTER_RESEARCH
- settingChangeModeDistribution: UNVERIFIED_AFTER_RESEARCH
- settingChangeStateDistribution: UNVERIFIED_AFTER_RESEARCH
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: MULTI_SOURCE_FOR_NORMAL_CEILING_AND_MODE_STRUCTURE__SECONDARY_MULTI_SOURCE_FOR_COUNTER_CLEAR__UNVERIFIED_AFTER_RESEARCH_FOR_SUEOKI_POWER_CYCLE_MODE_STATE_AND_DETECTION

## missingFields

- ART「闘校チャンス」そのものの設定別初当たり直接表。
- 50枚ベースの別系統直接照合値（当時資料約32G/千円は取得済み）。
- 設定変更時の通常A/B/天国具体振り分け。
- 設定変更時の内部高確/通常状態具体振り分け。
- 純据え置き・単純電源OFF→ONの天井/モード/状態の完全契約。
- 本機固有の変更判別要素。

## conflicts

1. **CONFLICT_RELEASE_MONTH_2013_01_VS_2013_02**
   - SANKYO公式オンライン博物館: 2013.02導入。
   - 2013-01当時業界記事: 納品予定2月3日から。
   - K-Navi月間カレンダー系列: 2013-02-04。
   - P-WORLD現行DB末尾: 導入開始2013年01月。
   - 具体日付き当時資料/メーカー月を優先してreleaseDate=2013-02-04とし、P-WORLD月表記はCONFLICT保持。
2. **CONFLICT_RETROSPECTIVE_WRONG_SPEC_OR_MIXED_MACHINE**
   - 後年5号機クロニクルは本機を「2013年1月 / ART『乱馬ラッシュ』 / 1セット40G+α / ART初当たり1/297.8～1/224.4」と掲載。
   - SANKYO公式、P-WORLD、2013-01当時業界記事、パチマガスロマガは「ART『闘校チャンス』 / 120枚+α / 擬似BIG・REG / 純増約2.0枚/G」で一致。
   - 名称・基本単位・初当たり構造が一致しないため平均/統合せず、当時/公式系列を本線採用。
3. **SAME_TITLE_COLLISION_2018_EXCITE**
   - 2018年EXCITE版にも同名「パチスロらんま1/2」が存在する。2018年版の天井非搭載、50枚47.4～54.9G等は本2013年SANKYO機へ混入しない。

## sources

取得日: 2026-09-06

1. SANKYOオンライン博物館 — https://www.sankyo-fever.jp/collection/548/
   - 2013.02導入、ブランド、擬似BIG/REG、ART「闘校チャンス」。
2. P-WORLD — https://www.p-world.co.jp/machine/database/6974
   - 型式/検定番号、機械割、PREG/BIG/REG/合算、ART120枚+α・約2.0枚/G、通常高確、月表記競合。
3. Pマンズ（グリーンべると転載系・2013-01-04） — https://p-mans.blogspot.com/2013/01/12.html
   - 当時業界発表、疑似ボーナス、BIG平均約200枚、REG平均約60枚、ART120枚・約2.0枚/G、2月3日納品予定。
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/30/sankyo_slot_30.php
   - 解析カテゴリ、通常モード/規定G数/朝イチ設定変更資料の存在。関連取得ページでボーナス解除ゾーンを確認。
5. パチマガスロマガ ボーナス解除率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/30/i.php
   - 通常A/B・天国、規定ゲーム数ゾーン。
6. ★スロスター★ブログ（2012-12当時） — https://ameblo.jp/slostar/entry-11429044578.html
   - 約32G/千円、通常A/B/天国、天国ループ率約50%、無差別バトル初当たり。
7. 2-9伝説まとめ — https://29den.com/ranma/
   - 通常A/B最大999G、天国最大100G、設定変更で天井G数リセット、機械割/疑似ボーナス合算の照合。
8. 5号機クロニクル SANKYO一覧 — https://5goki.com/sankyo
   - 後年回顧DB。ART名称/単位/初当たり構造の競合資料としてのみ使用。
