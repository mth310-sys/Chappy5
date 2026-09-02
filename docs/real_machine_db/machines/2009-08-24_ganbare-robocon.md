# パチスロがんばれ!!ロボコン

machineName: パチスロがんばれ!!ロボコン
manufacturer: サミー
formalModelName: ロボコンS
inspectionNumber: 9S0092
releaseDate: 2009-08-24（K-Naviホール導入開始 / P-WORLDは2009年8月）
generation: 5号機
systemType: ボーナス+ART / CZ経由ART / 天井CZ / 高確状態 / 50G ARTループ
coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_NET_INCREASE_CONFLICT

## payoutRateBySetting

当時パチマガスロマガ解析 / pacnk掲載系列:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.27% |
| 2 | 99.09% |
| 3 | 100.96% |
| 4 | 104.33% |
| 5 | 108.05% |
| 6 | 112.24% |

K-Navi自社調べ系列:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 99.0% |
| 3 | 100.9% |
| 4 | 103.9% |
| 5 | 106.9% |
| 6 | 110.1% |

P-WORLD掲載系列:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 98.8% |
| 3 | 100.8% |
| 4 | 102.9% |
| 5 | 105.9% |
| 6 | 109.1% |

- 設定4〜6を中心に単純な丸め差では説明できないため、平均せず三系列を `CONFLICT_PAYOUT_THREE_SERIES` として保持する。
- パチマガスロマガの当時解析値はpacnkの後年整理値と一致するため、同系列の独立再掲として照合できる。

## initialHitBySetting

当時パチマガスロマガ解析:

| 設定 | BIG | 赤CB | 黄CB | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/3640.89 | 1/546.13 | 1/555.39 | 1/256.00 |
| 2 | 1/3276.80 | 1/550.72 | 1/560.14 | 1/256.00 |
| 3 | 1/2978.91 | 1/555.39 | 1/564.97 | 1/256.00 |
| 4 | 1/2730.67 | 1/560.14 | 1/569.88 | 1/256.00 |
| 5 | 1/2520.62 | 1/564.97 | 1/574.88 | 1/256.00 |
| 6 | 1/2340.57 | 1/569.88 | 1/579.96 | 1/256.00 |

- 全ボーナス合算1/256.00はK-Naviでも全設定共通1/256として一致。
- P-WORLDの青BAR/BIG系列も上表BIGと一致する。

confidence: OLD_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

当時パチマガスロマガ解析の1000円あたりゲーム数:

| 設定 | 50枚あたりG数 |
|---:|---:|
| 1 | 33.79G |
| 2 | 33.80G |
| 3 | 33.80G |
| 4 | 33.80G |
| 5 | 33.80G |
| 6 | 33.80G |

confidence: OLD_ANALYSIS_HIGH_SINGLE_DIRECT_TABLE

## netIncrease

- ART「ロボコンラッシュ」: 1セット50G。
- 当時パチマガスロマガ / K-Navi詳細 / 777TOWN: 約+1.5枚/G。
- P-WORLD: 約+1.56枚/G、50Gで約77枚相当。
- 80%以上のループが基本的な特徴。パチマガスロマガでは35%・80%・100%の3継続モードがあるとされるが、物差し用途では全内部振り分けを収集しない。
- +1.5と+1.56は平均せず、精度/定義差を解消できないため `CONFLICT_NET_INCREASE_1_5_VS_1_56` として保持する。

confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT

## basicPayout

- BIG（青BAR）: 約234枚（342枚超払い出しで終了）
- CB: 約60枚（81枚超払い出しで終了）

当時パチマガスロマガとP-WORLDで同系統を確認。

## modeSpecificMinimumData

- ボーナス後およびART終了後にCZ「ロビンチャンス」へ移行。
- CZ中の白7揃い（特殊リプレイ）を主契機にART「ロボコンラッシュ」へ突入。
- 通常状態で900G消化すると天井CZへ突入。
- P-WORLDでは、天井CZでART非突入時はボーナス成立までチェリーナビが発生するAT状態へ移行すると説明される。
- P-WORLDではハマリが深いほどボーナス後ART突入率が上昇する構造も確認できるが、全高確移行率/全内部抽選は物差し用途外として収集しない。

## resetBehavior — v0.7

settingChangeBehavior: CONFIRMED_RESET_STARTS_INTERNAL_CZ。5号機天井整理資料で「設定変更後は、内部的にチャンスゾーン状態となる」と明記。K-Naviも本機を「朝イチ特典」対象として掲載する。設定変更時に900G天井カウンタがclear/retainのどちらかは直接資料を確定できないため別項目で未確認とする。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の900G天井進捗、CZ/高確、ART継続状態を本機固有の直接資料で確定できず。一般的な5号機挙動から補完しない。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の900G天井進捗、CZ/高確、ART状態の保持/初期化を本機固有資料で確定できず。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常状態900Gで天井CZへ移行することは確定。設定変更後が内部CZ開始であることも確定したが、900Gカウンタそのもののclear/retainを直接示す記述は確認できず、CZ開始という事実からカウンタclearを推測しない。

ceilingAfterReset: CONFIRMED_RESET_START_CZ_WITHOUT_NUMERIC_SHORTENING_VALUE。設定変更後は内部CZ状態から開始するため、朝一に900G到達を待たずCZ状態となる恩恵を確認。設定変更後専用の「天井XG」のような短縮数値は確認できない。

modeAfterReset: PARTIAL_CONFIRMED_CZ。設定変更後の初期状態は内部CZ。ART継続モード35%/80%/100%や高確状態の設定変更時振り分けは直接資料を確定できず、全内部テーブルは収集しない。

stateAfterReset: CONFIRMED_INTERNAL_CZ_START。設定変更後の主要状態として内部CZ開始を確認。ART実消化中に設定変更された場合のリプレイ状態/液晶復帰位置等はUNVERIFIED。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: CONFIRMED。設定変更後は内部CZ状態から開始。K-Naviの「朝イチ特典」分類とも整合する。

resetPenalties: UNVERIFIED_AFTER_RESEARCH。設定変更時のみのナビストック消滅等の明示的な不利要素は今回の資料群では確定できず。

resetDetection: UNVERIFIED_AFTER_RESEARCH。`ガックン / 初期出目 / 液晶 / メガセグ / 朝一 / 据え置き`を組み替えて再探索したが、本機固有の設定変更判別挙動を直接確認できず。

numericResetData:
  normalCeiling: normalState900G_then_ceilingCZ
  resetStartState: INTERNAL_CZ
  resetSpecificCeilingGames: UNVERIFIED_AFTER_RESEARCH
  resetGameCounterClearOrRetain: UNVERIFIED_AFTER_RESEARCH
  resetCZEntryRate: 100_PERCENT_AS_STATE_START（設定変更後は内部CZ状態と明記）
  morningHitRate: UNVERIFIED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_WITH_RESET_INTERNAL_CZ_START_CONFIRMED

resetBehaviorResearchNote:
- `パチスロがんばれ!!ロボコン / がんばれロボコン / ロボコンS / Sammy / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 900G / ロビンチャンス / チャンスゾーン / 高確 / ガックン` を組み替えて再探索。
- サミー公式2009年アーカイブ、K-Navi、P-WORLD、当時パチマガスロマガ、777TOWN、pacnk、5号機天井整理資料を横断。
- CZ開始の確定情報から900G天井カウンタのclear/retainを推測しない。

## sources

取得日: 2026-09-03

1. K-Navi「パチスロがんばれ!!ロボコン」 — https://p-kn.com/slot/1018/ — 2009-08-24ホール導入開始、全設定ボーナス合算1/256、50G約77枚、80%強ループ、天井/朝イチ特典/ART解析導線 — reliability: OLD_ANALYSIS_HIGH
2. K-Navi「ART・ロボコンラッシュ」 — https://p-kn.com/slot/1018/12276/ — ART50G、約+1.5枚/G、80%以上ループ — reliability: OLD_ANALYSIS_HIGH
3. K-Navi「機械割&期待収支」 — https://p-kn.com/slot/1018/12264/ — 自社調べ機械割97.2〜110.1% — reliability: OLD_ANALYSIS_SINGLE
4. P-WORLD「パチスロがんばれ!!ロボコン」 — https://www.p-world.co.jp/machine/database/5627 — 型式ロボコンS、検定9S0092、2009年8月、BIG/CB、ART約+1.56枚/G、900G天井CZ、機械割97.9〜109.1% — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/119/a.php — BIG約234枚/CB約60枚、ART50G・約+1.5枚/G、35/80/100%継続モード — reliability: OLD_ANALYSIS_HIGH
6. パチマガスロマガ「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/119/c.php — 設定別1000円あたり33.79〜33.80G — reliability: OLD_ANALYSIS_HIGH
7. パチマガスロマガ「ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/119/h.php — BIG/赤CB/黄CB/合算、PAYOUT97.27〜112.24% — reliability: OLD_ANALYSIS_HIGH
8. パチスロ立ち回り講座「か行の機種の天井情報(5号機版)」 — https://crankyseven.com/sp/tenjo-5ka.htm — 通常900G天井CZ、設定変更後は内部CZ状態 — reliability: RETROSPECTIVE_ANALYSIS
9. pacnk「パチスロ がんばれ!!ロボコン 設定判別ツール」 — https://pacnk.com/slot/tools/sh_robocon.html — BIG/PAYOUT系列を当時解析値と照合、2009年8月 — reliability: RETROSPECTIVE_ANALYSIS
10. サミー「パチスロ製品 2009年」 — https://www.sammy.co.jp/japanese/products/pachislot/2009/index.html — 2009年公式製品アーカイブに本機掲載。ページ内日付2009/03/01は製品アーカイブ側タイムスタンプとして扱い、K-Naviのホール導入日2009-08-24とは定義を分離 — reliability: OFFICIAL
11. 777TOWN「パチスロがんばれ!!ロボコン」 — https://www.777town.net/explanation/slot_robocon.jsp — Sammy、2009年発売、ART約+1.5枚/G、80%OVER — reliability: OFFICIAL_GROUP_PRODUCT_SERVICE

## missingFields

- 設定変更時の900G天井カウンタclear/retain
- 据え置き時の900G進捗/CZ/高確/ART状態保持
- 単純電源OFF→ON時の同状態保持
- 設定変更後CZ以外の高確/ART継続モード初期振り分け
- ガックン/初期出目/液晶/メガセグ等による変更判別
- 朝一専用の当選率/ART突入率など比較可能な数値
- 明示的な設定変更時ペナルティ

## conflicts

- 機械割: パチマガスロマガ/pacnk 97.27〜112.24%、K-Navi自社調べ97.2〜110.1%、P-WORLD 97.9〜109.1%。単純丸めではないため三系列を保持し平均しない。
- ART純増: 当時パチマガスロマガ/K-Navi/777TOWNの約+1.5枚/Gに対し、P-WORLDは約+1.56枚/G。平均せず両方を保持する。
