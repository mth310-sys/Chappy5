# 怪胴王

machineName: 怪胴王
manufacturer: アリストクラートテクノロジーズ
releaseDate: 2006-11-26予定 / 一部解析資料2006-12表記
generation: 5号機初期
systemType: ボーナス+AT
formalModelName: 爆裂王2
coreStatus: PARTIAL_CORE_RESET_QA_PARTIAL

## payoutRateBySetting

再探索で後年整理資料から設定別PAYOUTを回収。ただし設定2のみ資料差があるため平均せずCONFLICT保持。

- 設定1: **95.2%**
- 設定2: **98.2%（pacnk） / 98.7%（pachinko's blog） — CONFLICT**
- 設定3: **100.8%**
- 設定4: **104.0%**
- 設定5: **106.9%**
- 設定6: **109.6%**

confidence: RETROSPECTIVE_MULTI_SOURCE_WITH_CONFLICT

## initialHitBySetting

### BIG合成
赤7BIG・白7BIG・BAR BIGの合成:

| 設定 | BIG合成 |
|---|---:|
| 1 | 約1/420 |
| 2 | 約1/390 |
| 3 | 約1/364 |
| 4 | 約1/349 |
| 5 | 約1/334 |
| 6 | 約1/321 |

### CT合成
赤7CT・白7CTの合成:

| 設定 | CT合成 |
|---|---:|
| 1 | 約1/993 |
| 2 | 約1/936 |
| 3 | 約1/886 |
| 4 | 約1/819 |
| 5 | 約1/762 |
| 6 | 約1/655 |

### ボーナス合成
詳細解析資料:

| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/295.21 |
| 2 | 1/275.36 |
| 3 | 1/258.02 |
| 4 | 1/244.54 |
| 5 | 1/232.40 |
| 6 | 1/215.58 |

信頼度: ANALYSIS_HIGH（HAZUSEのBIG/CT合成と詳細解析資料の個別フラグ値が整合）

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH。

「怪胴王 / 爆裂王2」「50枚 / 1000円 / ベース / コイン持ち」で当時解析、後年DB、業界記事を再探索したが比較可能な直接値は今回も確定できず。

## netIncrease

AT「爆ちゃんタイム」:
- 当時業界記事: 約1.2枚/G
- 攻略資料: 約1.1枚/G

CONFLICTとして保持。平均化しない。

## basicPayout

- BIG: 純増約310枚（業界記事）
- CT: 純増約100枚（業界記事）
- 別解析資料ではBIG 345枚超払い出し終了、CT 120枚超払い出し終了

実獲得目安と規定払い出し終了条件を区別して保持。

## modeSpecificMinimumData

- 3種類BIG + 2種類CT
- 赤7BIG / 白7BIG / 赤7CT後などからAT「爆ちゃんタイム」
- AT中15枚役ナビ + リプレイ確率上昇
- 攻略資料では30〜300G継続
- 規定ゲーム数到達で次回ボーナスまでATとなるハマリ救済あり（業界記事）
- ハマリ救済の具体的な規定ゲーム数は今回も高信頼資料で確定できず。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名・型式名「爆裂王2」、設定変更、リセット、朝一、天井、ハマリ救済を組み合わせ、業界記事・当時攻略・後年DBを再探索したが、設定変更時にハマリ救済カウンタ、AT権利/残G、内部RT状態をclear/retainするか直接資料を確定できず。一般的5号機挙動から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のハマリ救済進捗、AT残G/権利、内部RT状態の保持を本機固有資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合のハマリ救済進捗、AT残G/権利、内部RT状態の扱いを直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に「規定ゲーム数到達で次回ボーナスまでAT」というハマリ救済が存在することは当時業界記事で確認したが、設定変更時の進捗クリア/引継ぎは不明。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井・別救済ゲーム数は確認できず。通常救済の具体的規定G数自体も高信頼値未確定。

modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常時モード/朝一専用モードの公開情報を確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。AT「爆ちゃんタイム」の残G/権利、内部RT、プチRT等の設定変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機初期・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有のAT付与、救済短縮、高確スタート等は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の主要不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ/液晶、朝一ゲーム数挙動による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- standardRescue: **規定ゲーム数到達で次回ボーナスまでAT（具体G数UNVERIFIED）**
- gameCounterOnSettingChange: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- morningATProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## sources

取得日: 2026-09-04（resetBehavior QAおよび性能再探索更新）

1. グリーンべると — アリストクラートから爆ちゃんタイム搭載『怪胴王』
   - https://web-greenbelt.jp/00004874/
   - 発表、型式名爆裂王2、BIG約310枚/CT約100枚、AT約1.2枚/G、ハマリ救済、納品11月26日予定
   - reliability: INDUSTRY
2. P-WORLD / グリーンべると転載
   - https://news.p-world.co.jp/articles/1904/greenbelt
   - reliability: INDUSTRY
3. HAZUSE — 怪胴王 解析・機種情報
   - https://hazuse.com/i/data/kaidouou/top.htm
   - BIG/CT合成確率、払い出し終了条件、2006年12月表記
   - reliability: ANALYSIS_SINGLE
4. crankyseven — 怪胴王 解析攻略
   - https://crankyseven.com/kaidouou-pc.htm
   - 個別BIG/CT確率、ボーナス合成、AT約1.1枚/G、30〜300G
   - reliability: ANALYSIS_SINGLE
5. パチマガスロマガ — 怪胴王 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/27/a.php
   - AT/RT延命/天井AT/プチRT、BIG/CT獲得性能
   - reliability: ANALYSIS_HIGH
6. pacnk — 怪胴王 設定判別ツール
   - https://pacnk.com/slot/tools/sh_kaidouou.html
   - BIG/CT、PAYOUT 95.2/98.2/100.8/104.0/106.9/109.6%
   - reliability: RETROSPECTIVE_DATABASE
7. pachinko's blog — アリストクラート「怪胴王」スペック
   - https://pachinko.hatenablog.jp/entry/2006/11/kaidou-oh
   - 型式名爆裂王2、BIG/CT、PAYOUT 95.2/98.7/100.8/104.0/106.9/109.6%
   - reliability: RETROSPECTIVE_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース
- ハマリ救済の具体的規定ゲーム数
- settingChangeBehavior詳細
- carryOverBehavior
- powerCycleBehavior
- resetDetection
- 公開朝一数値

## conflicts

- 導入時期: 業界一次寄り記事は2006-11-26納品開始予定、HAZUSEは2006年12月表記。実導入境界の差として保持。
- AT純増: 約1.2枚/G（業界記事） vs 約1.1枚/G（攻略資料）。平均化しない。
- 機械割設定2: 98.2%（pacnk） vs 98.7%（pachinko's blog）。平均化せずCONFLICT。
