# パチスロ ピンクパンサーSP

machineName: パチスロ ピンクパンサーSP
formalModelName: SピンクパンサーSPXX
manufacturer: 山佐ネクスト（製造元: 山佐）
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-06-06
generation: 6.2号機
systemType: A+RT+ART / リアルボーナス + RT + ゲーム数上乗せART / 技術介入
recordNo: 1500
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

本機は設定1 / 4 / 5 / 6の4段階設定。

### 公開基準値（ビタ押し60%成功）
- 設定1: 99.4%
- 設定4: 101.0%
- 設定5: 102.2%
- 設定6: 104.1%

### 技術介入すべて失敗
- 設定1: 97.2%
- 設定4: 98.6%
- 設定5: 99.5%
- 設定6: 101.1%

### 完全攻略時
- 設定1: 103.2%
- 設定4: 104.4%
- 設定5: 105.6%
- 設定6: 107.3%

注: なな徹の「機械割」99.4/101.0/102.2/104.1%は、ちょんぼりすた等の技術介入60%成功値と一致する。定義差を平均せず、技術介入成功率別の値として分離保持する。

信頼度: HIGH（なな徹、ちょんぼりすた、イチカツ等で照合）

## initialHitBySetting

### BIG
- 設定1: 1/278.9
- 設定4: 1/277.7
- 設定5: 1/275.4
- 設定6: 1/274.2

### REG
- 設定1: 1/374.5
- 設定4: 1/358.1
- 設定5: 1/334.4
- 設定6: 1/307.7

### ボーナス合算
- 設定1: 1/159.8
- 設定4: 1/156.4
- 設定5: 1/151.0
- 設定6: 1/145.0

### RT「パンサーチャンス」実質突入率
- 設定1: 1/172
- 設定4: 1/168
- 設定5: 1/162
- 設定6: 1/155

### ART「パンサータイム」実質突入率
- 設定1: 1/424
- 設定4: 1/420
- 設定5: 1/410
- 設定6: 1/405

信頼度: HIGH

## baseGamesPer50

- 約40G / 50枚（設定1）

信頼度: HIGH

## netIncrease

- ART「パンサータイム」純増: 約0.3枚/G
- ART初期ゲーム数: 50G+α
- ART平均滞在: 約207G（設定1）

信頼度: HIGH

## basicPayout

- BIG: 175枚固定
- REG: 40枚固定
- RT「パンサーチャンス」: 初期10G+α、平均約39G（設定1）
- ART「パンサータイム」: 初期50G+α、純増約0.3枚/G、平均約207G（設定1）

## modeSpecificMinimumData

- リアルボーナス後はRTまたはARTへ必ず突入するA+RT+ART機。
- RT中はボーナス、ビタ押しリプレイ、スイカBの一部などからART昇格を抽選。
- ゲーム数天井・ボーナス間天井・通常時ゾーンは非搭載。
- 有利区間完走条件は「有利区間3000G」「ART規定ゲーム数消化」「獲得2400枚超」。
- ART規定ゲーム数は有利区間移行時に2900Gまたは456Gを抽選。設定1は2900G 100%、設定4は2900G 68.8% / 456G 31.3%、設定5は43.8% / 56.3%、設定6は12.5% / 87.5%。
- 456G完走は設定4以上確定級の設定推測要素だが、朝一リセット専用恩恵ではないためresetBenefitsには混入させない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED_NON_IMPACTFUL_MORNING
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior

- 設定変更時のゲーム数天井処理: **NOT_APPLICABLE**（天井非搭載）。
- 設定変更専用の朝一恩恵は、複数解析で **特になし / NONE_CONFIRMED**。
- 設定変更時のRT/ART内部状態、成立済みボーナス、ART残りG、ART規定ゲーム上限の厳密な処理は、機種名・型式・メーカー名と「設定変更 / リセット / 朝一 / RT / ART / 有利区間」を組み合わせて再探索したが直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 据え置き時の天井G数: **NOT_APPLICABLE**。
- 通常時に客側が追うゲーム数天井・周期・朝一モードは存在しない。
- RT/ART中閉店を跨いだ場合の内部状態・残りG・有利区間状態の機種固有CARRY_OVER契約は直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 純電源OFF→ON時のRT/ART内部状態、ART残りG、有利区間、成立済みボーナスの機種固有契約は、1geki・必勝本・当時解析・型式名検索を横断したが直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 天井カウンタは非搭載のため、天井ゲーム数の引継ぎ問題は **NOT_APPLICABLE**。

### gameCounterReset

- ゲーム数天井 / ボーナス間天井: **NOT_APPLICABLE**。
- 通常時に朝一狙いへ直結する内部G数カウンタは確認できない。

### ceilingAfterReset

- 通常天井: **NONE**。
- 設定変更後の短縮天井: **NOT_APPLICABLE**。
- ちょんぼりすたは「天井非搭載」「朝イチの恩恵は特にナシ」と明記。
- 1gekiの天井/設定変更ページは当時「現在調査中」のままで、設定変更固有の数値は掲載されていない。

### modeAfterReset

- 通常時の天井モード / ゾーンモード: **NOT_APPLICABLE**。
- 設定変更専用の朝一モード: **NONE_CONFIRMED**。
- ART規定ゲーム数2900G/456G抽選は有利区間移行時の設定差であり、「設定変更時のみ」のモード抽選ではない。

### stateAfterReset

- 設定変更時のRT/ART状態・内部RT状態の厳密な処理は **UNVERIFIED_AFTER_RESEARCH**。
- 通常時に公開された朝一専用高確・CZ高確・ボーナス高確等は **NONE_CONFIRMED**。

### advantageousSectionReset

- 本機は有利区間を使用し、有利区間移行時にART規定ゲーム数上限2900G/456Gを抽選する。
- 設定変更 / 据え置き / 純電源OFF→ONの3条件それぞれについて、有利区間の機種固有な明示契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な6.2号機の挙動から推測補完していない。

### resetBenefits

- 朝一 / 設定変更専用の主要恩恵: **NONE_CONFIRMED**。
- 天井短縮: **NOT_APPLICABLE**。
- 公開資料では「朝イチの恩恵は特にナシ」。

### resetPenalties

- 設定変更時の主要な不利要素: **NONE_CONFIRMED**。

### resetDetection

- 天井・朝一モード・有利区間ランプを用いる公開された主要変更判別法は **NONE_CONFIRMED**。
- 本機固有のリールガックンについて、「ピンクパンサーSP / SピンクパンサーSPXX / 山佐」と「ガックン / 設定変更 / リセット / 朝一 / 据え置き」を組み合わせ再探索したが直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の液晶初期表示等による確定判別も直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- 通常天井: **なし**。
- 設定変更後短縮天井: **なし / NOT_APPLICABLE**。
- 朝一専用当選率・モード振り分け・恩恵発生率: **NONE_PUBLISHED_CONFIRMED**。

### publicMorningNumbers

- 朝一専用の公開数値: **NONE_CONFIRMED**。
- ART規定ゲーム数2900G/456G振り分けは設定変更専用値ではなく、有利区間移行時の設定差としてmodeSpecificMinimumDataに分離保持。

## resetBehavior QAメモ

- ちょんぼりすたは天井非搭載、ゾーンなし、朝一リセット恩恵「特にナシ」と明記。
- 1gekiの専用「天井/設定変更」ページは「現在調査中」のまま。設定変更・電源ON/OFFの比較表は公開されていない。
- 必勝本には「天井&設定変更」項目自体は存在するが、検索可能な公開本文から設定変更 / 純電断の機種固有挙動を固定できなかった。
- 有利区間移行時のART規定ゲーム数上限2900G/456Gはなな徹・1gekiで一致。朝一専用契約ではないため、リセット恩恵と誤分類しない。
- 天井がなく朝一恩恵も確認されないため、未確定のRT/ART低レイヤ契約はホール経営上の朝一客行動への影響が限定的。推測では埋めずPARTIAL_RESEARCH_EXHAUSTEDとした。

## conflicts

- 機械割の99.4/101.0/102.2/104.1%は資料によって単に「機械割」と記載されるが、別資料では技術介入60%成功時として扱われる。値そのものは一致しており、数値CONFLICTではなく **DEFINITION_LABEL_DIFFERENCE** として保持。
- 完全攻略値103.2/104.4/105.6/107.3%、技術介入全失敗97.2/98.6/99.5/101.1%は定義を分離。

## missingFields

- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- 設定変更時のRT/ART内部状態・ART残りG・有利区間の厳密契約
- 据え置き時のRT/ART内部状態・ART残りG・有利区間の厳密契約
- 純電源OFF→ON時のRT/ART内部状態・ART残りG・有利区間の厳密契約
- 本機固有のガックン / 初期表示による変更判別

## sources

取得日: 2026-09-12

1. 遊技日本 / P-WORLD — 「SピンクパンサーSPXX」が検定通過
   - https://news.p-world.co.jp/articles/20084/nippon
   - 型式名、製造元山佐、検定通過
   - reliability: INDUSTRY
2. 遊技通信 / P-WORLD — “攻めやすさNo1”のビタ押し入門マシン登場
   - https://news.p-world.co.jp/articles/20279/yugitsushin
   - A+RT+ART、BB175枚、RB40枚、RT10G+α/平均39G、ART50G+α/純増0.3枚/平均207G、6月上旬導入予定
   - reliability: INDUSTRY
3. 娯楽産業 — 山佐ネクスト 新機種「パチスロ ピンクパンサーSP」発表
   - https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%94%E3%83%B3%E3%82%AF%E3%83%91%E3%83%B3%E3%82%B5%E3%83%BCs/
   - 山佐ネクスト、仕様、基本獲得性能、RT/ART性能
   - reliability: INDUSTRY
4. 遊技日本 / P-WORLD — 導入カウントダウン
   - https://news.p-world.co.jp/articles/20664/nippon
   - 2022-06-06実導入
   - reliability: INDUSTRY
5. なな徹 — ボーナス確率/小役確率
   - https://nana-press.com/kaiseki/machine/365/9170/
   - 設定別BIG/REG/合算、RT/ART実質突入率、機械割、完全攻略値、50枚約40G
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — SピンクパンサーSP
   - https://chonborista.com/slot/yamasa-slot/167375/
   - 導入日、A+RT+ART、機械割の技術介入成功率別定義、天井なし、朝一恩恵なし
   - reliability: ANALYSIS_HIGH
7. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_pinkpanther_sp/3/
   - 天井/設定変更ページは「現在調査中」
   - reliability: ANALYSIS_HIGH / MISSING_EVIDENCE
8. 1geki — 有利区間完走
   - https://1geki.jp/slot/s_pinkpanther_sp/85/
   - 有利区間3000G/2400枚、ART規定ゲーム2900G/456G振り分け
   - reliability: ANALYSIS_HIGH
9. なな徹 — ART「パンサータイム」
   - https://nana-press.com/kaiseki/machine/365/9759/
   - 有利区間完走条件、ART規定ゲーム数振り分け
   - reliability: ANALYSIS_HIGH
10. パチマガスロマガ — パチスロ ピンクパンサーSP
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/07/kh01.php
   - 山佐/2022年6月、BB175枚、REG40枚、ART純増0.3枚、初期50G+α
   - reliability: ANALYSIS_HIGH
11. P-WORLD機種DB — パチスロ ピンクパンサーSP
   - https://www.p-world.co.jp/machine/database/9632
   - 山佐、6号機、リアルボーナス+RT+ART、基本性能
   - reliability: INDUSTRY_DB
12. イチカツ — 2022年新台一覧
   - https://ichikatsu.com/newslot2022/
   - 2022-06-06、設定別BIG/REG/合算、約40G/50枚、機械割定義
   - reliability: ANALYSIS_HIGH

## completeness

- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_NON_IMPACTFUL_MORNING
- confidence: HIGH_CORE / MEDIUM_RESET_NEGATIVE_FINDING
