# 科学忍者隊ガッチャマン

machineName: 科学忍者隊ガッチャマン
formalModelName: TAPS06
manufacturer: タイヨー
releaseDate: 2007-02-18（全国一斉納品予定。関東1都6県・東北6県は部材不足で3月上旬へ延期）
generation: 5号機初期
systemType: A+ART/AT（ボーナス+ガッチャマンタイム+G-ZONE）
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

- 設定1: 96.0%
- 設定2: 99.0%
- 設定3: 101.0%
- 設定4: 104.0%
- 設定5: 109.0%
- 設定6: 117.0%

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

### BIG合成
- 設定1: 1/387.79
- 設定2: 1/368.18
- 設定3: 1/364.09
- 設定4: 1/358.12
- 設定5: 1/348.60
- 設定6: 1/344.93

### REG
- 全設定: 1/1310.72

### ボーナス合成
- 設定1: 1/299.25
- 設定2: 1/287.44
- 設定3: 1/284.94
- 設定4: 1/281.27
- 設定5: 1/275.36
- 設定6: 1/273.07

### BIG種別
- 同色BIG（GT500）: 1/2114.06 → 1/655.36（設定1→6）
- 赤7頭BIG（GT150）: 1/1149.75 → 1/949.80（設定別で非単調）
- 青7頭BIG（GTなし）: 1/809.09 → 1/3120.76（設定1→6）

信頼度: ANALYSIS_HIGH（パチマガスロマガ旧攻略）

## baseGamesPer50

1000円あたり平均プレイ数:
- 設定1: 34.74P
- 設定2: 34.74P
- 設定3: 34.74P
- 設定4: 35.30P
- 設定5: 35.30P
- 設定6: 35.30P

信頼度: ANALYSIS_HIGH

## netIncrease

- ガッチャマンタイム（GT）: リプレイ高確率+2色チェリーナビでコイン増加型ART。
- 同色BIG後GT500、赤頭BIG後GT150。
- 当時業界記事はGT中の比較可能な純増/Gを明示していないため数値はUNVERIFIED。
- G-ZONE中はチェリーATでコイン持ち上昇。1000円あたり72.14P（設定1〜3）/74.60P（設定4〜6）。

## basicPayout

- BIG: 345枚を超える払い出しで終了。パチマガスロマガ旧攻略の純増目安 約265枚。
- REG: 12Pまたは8回入賞で終了。純増目安 約80枚。
- グリーンべると当時記事はBB平均約310枚、RB約100枚。定義差の可能性があるため平均せずCONFLICT_DEFINITIONとして保持。

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用。
- ボーナスは8種類BIG+4種類REGの計12種類。
- 同色BIG後GT500、赤頭BIG後GT150、青頭BIGはGTなし。
- GTはリプレイ高確率+チェリー色ナビ。1枚役入賞等でパンクするリプパン外し型。
- G-ZONEはAT。REG中8連続ベル、通常時ベル後のチェリー入賞、ART中ミニゲーム成功等から突入。
- 天井: ボーナス間1300Gで救済AT「G-ZONE」発動、次回ボーナス成立まで継続とする解析資料あり。ボーナス直撃天井ではない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior
- 設定変更時にボーナス間1300G天井カウンタ、GT/G-ZONE内部状態をどう処理するかを明記した本機固有の高信頼資料を、表記揺れ・型式名・当時資料系統を変えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 据え置き時の天井ゲーム数/GT/G-ZONE内部状態引継ぎを明記した本機固有の高信頼資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 設定変更なし電源OFF→ONのみの天井ゲーム数・GT/G-ZONE状態処理を明記した本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 通常時ボーナス間1300GでG-ZONE発動。
- 設定変更/据え置き/単純電断時のカウンタ処理は **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- リセット専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常救済はボーナス間1300GでG-ZONE。

### modeAfterReset
- 朝一専用モード/設定変更専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- GT/G-ZONE内部状態の設定変更時処理は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更・朝一固有の主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン・表示・ゲーム数挙動による設定変更判別を高信頼で確定できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 設定変更時専用の比較可能な公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers
- 設定変更専用の公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時1300G救済G-ZONEは通常仕様であり朝一専用数値ではない。

### resetBehavior 再探索メモ

2026-09-07再QA。`科学忍者隊ガッチャマン / TAPS06 / タイヨー` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1300G / G-ZONE / ガッチャマンタイム / RT引継ぎ / ガックン` を組み合わせ、当時業界記事、P-WORLD、パチマガスロマガ旧攻略、K-Navi、古い攻略サイト、天井整理資料、後年回顧を再横断。1300G救済G-ZONEと通常GT/G-ZONE仕様は再確認できたが、設定変更・据え置き・電断時のカウンタ/内部状態処理について新たな直接契約は得られなかった。一般的な5号機挙動から推測補完しない。

## sources

取得日: 2026-09-07（resetBehavior再QA。性能コア出典は2026-08-31収集を継承）

1. グリーンべると — タイヨー初の5号機は『ガッチャマン』
   - https://web-greenbelt.jp/00003979/
   - reliability: INDUSTRY
2. P-WORLD業界ニュース — 『ガッチャマン』、関東、東北エリアで納品延期に
   - https://news.p-world.co.jp/articles/2053/greenbelt
   - reliability: INDUSTRY
3. P-WORLD — 科学忍者隊ガッチャマン
   - https://www.p-world.co.jp/machine/database/4552
   - reliability: INDUSTRY
4. パチマガスロマガ旧攻略 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/a.php
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/h.php
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧攻略 — 小役・1000円プレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/c.php
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ旧攻略 — G-ZONE
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/k.php
   - reliability: ANALYSIS_HIGH
8. pacnk — 科学忍者隊ガッチャマン 設定判別ツール
   - https://pacnk.com/slot/tools/sh_kagainjataigacchaman.html
   - reliability: ANALYSIS_SINGLE
9. パチスロ立ち回り講座 — か行の機種の天井情報(5号機版)
   - https://crankyseven.com/sp/tenjo-5ka.htm
   - reliability: ANALYSIS_SINGLE
10. K-Navi — パチスロ 科学忍者隊ガッチャマン
   - https://p-kn.com/slot/675/
   - 通常GT仕様の再照合。reset契約は追加確認できず
   - reliability: ANALYSIS_SINGLE

## missingFields

- GTの比較可能な純増枚数/G（当時高信頼数値）
- 設定変更/据え置き/電源OFF→ON時の1300G天井カウンタ処理
- 設定変更時のGT/G-ZONE内部状態処理
- 本機固有のresetDetection

## conflicts

- BIG/RB獲得枚数は、グリーンべるとがBB平均約310枚/RB約100枚、パチマガスロマガ旧攻略が規定払い出し345枚超に対する純増約265枚/REG約80枚と掲載。定義が同一と断定できないため平均せず保持。
- 導入日は全国予定2007-02-18だが、関東1都6県・東北6県は部材不足で3月上旬へ納品延期。releaseDateは全国基準予定日を主値とし地域差を注記。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
