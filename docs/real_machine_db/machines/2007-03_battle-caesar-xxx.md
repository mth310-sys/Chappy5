# バトルシーザーXXX

machineName: バトルシーザーXXX
manufacturer: ミズホ（アルゼグループ）
releaseDate: 2007-03（当時業界記事では3月中旬納品開始予定）
generation: 5号機初期
systemType: ボーナス+RT

## payoutRateBySetting

### パチ＆スロ必勝本掲載シミュレート値
- 設定1: 97.05%
- 設定4: 101.31%
- 設定6: 105.72%

### 5号機クロニクル掲載値
- 設定1: 97.7%
- 設定4: 101.2%
- 設定6: 104.6%

設定1・4は近いが設定6で1ポイント超の差があるため、平均せず CONFLICT として保持。

信頼度: CONFLICT

## initialHitBySetting

パチ＆スロ必勝本掲載値。

### BIG確率
- 設定1: 1/336.08
- 設定4: 1/313.57
- 設定6: 1/293.88

### CAESAR CHANCE / CC確率
- 設定1: 1/655.36
- 設定4: 1/574.88
- 設定6: 1/512.00

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

「バトルシーザーXXX / バトルシーザーＸＸＸ１ / ミズホ / アルゼ」に「50枚 / 1000円 / ベース / コイン持ち / 小役確率」を組み合わせ、公式、当時業界記事、P-WORLD、旧攻略サイト、後年DBを横断したが、本機固有の比較可能な50枚あたりゲーム数を確定できず。

信頼度: UNVERIFIED

## netIncrease

RT「バトルゲーム」は50G、100G、200Gの完走型RTとして公式・当時業界記事で確認。ただし1Gあたりの純増枚数を高信頼資料で確定できず。

信頼度: UNVERIFIED

## basicPayout

- 当時グリーンべると/P-WORLD業界記事: BIG純増 約270枚、REG/CC純増 約100枚
- 5号機クロニクル: BIG 約260枚、REG 約104枚
- P-WORLD機種DB: 青7/赤7BIGは345枚超の払い出しで終了、黒BAR CAESAR CHANCEは120枚超の払い出しで終了

実獲得目安について約270枚/約100枚と約260枚/約104枚の資料差があるため、平均せず CONFLICT として保持。払い出し終了条件とは定義を分ける。

信頼度: CONFLICT

## modeSpecificMinimumData

- 型式名: バトルシーザーＸＸＸ１
- 5号機。
- ユニバーサル公式分類は「ボーナス+RT」。
- 青7BIG終了後は必ず50G以上の完走型RT「バトルゲーム」。
- 赤7BIG終了後は30Gの「バトルゾーン」を経由し、特殊役成立で100Gまたは200Gの完走型RTへ移行。
- 青7後の50G RT中も特殊役成立により100G/200G RTを上乗せ可能。
- RB/CAESAR CHANCEでも最終1Gの所定条件でRTへ突入する仕様を当時業界記事で確認。
- 通常時のゲーム数天井・通常モード管理は今回確認できず。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 通常時ゲーム数天井/通常モード管理を確認できないため、それらの据え置き引継ぎは物差し上非該当。本機固有のRT/CZ状態引継ぎ資料は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を明記した高信頼資料を確認できず UNVERIFIED
- gameCounterReset: 通常時天井/ゲーム数解除を確認できず、天井用ゲーム数カウンタは物差し上非該当
- ceilingAfterReset: リセット時天井短縮/変更は確認できず
- modeAfterReset: 通常時モード/朝一専用モードは確認できず
- stateAfterReset: 設定変更時のRT/CZ等の内部状態再抽選・引継ぎを直接示す高信頼資料は未確認
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別」まで検索語を変えて再探索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

「バトルシーザーXXX」「バトルシーザーＸＸＸ１」「Battle Caesar XXX」「ミズホ」「アルゼ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 変更判別」を組み合わせ、メーカー公式、2007年当時業界記事、P-WORLD、旧攻略解析、5号機DBを横断。ボーナス後RT仕様は複数資料で確認できたが、設定変更・電断時の本機固有挙動や朝一数値は確定できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — バトルシーザーXXX
   - https://www.universal-777.com/product/slot/battle_caesar/
   - 2007年3月発売、ミズホ、ボーナス+RT、青7後50G以上RT、赤7後30G CZ→100/200G RT
   - reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース — ミズホ新筐体『バトルシーザーXXX』はRPGスロット
   - https://news.p-world.co.jp/articles/2041/greenbelt
   - 2007-02-09、3月中旬納品予定、BIG約270枚、RB約100枚、50/100/200G RT仕様
   - reliability: INDUSTRY
3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/781/1/13336
   - BIG 1/336.08・1/313.57・1/293.88、CC 1/655.36・1/574.88・1/512.00、機械割97.05/101.31/105.72%（シミュレート）
   - reliability: ANALYSIS_SINGLE
4. P-WORLD機種DB — バトルシーザーXXX
   - https://www.p-world.co.jp/machine/database/4616
   - 導入2007年3月、型式名バトルシーザーＸＸＸ１、BIG345枚超払い出し終了、CC120枚超払い出し終了
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 2007年3月、機械割97.7/101.2/104.6%、BIG約260枚/REG約104枚
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数/ベース
- RTの1Gあたり純増
- 本機固有の設定変更時内部処理
- 電源OFF→ONのみの本機固有挙動
- 本機固有の変更判別/ガックン情報
- 公開朝一専用数値

## conflicts

- 機械割: 必勝本シミュレート値 97.05 / 101.31 / 105.72%、5号機クロニクル 97.7 / 101.2 / 104.6%。平均せず双方保持。
- 実獲得目安: 当時業界記事 BIG約270枚 / RB約100枚、5号機クロニクル BIG約260枚 / REG約104枚。平均せず双方保持。P-WORLDの払い出し終了条件は別定義として保持。
- systemType表記: ユニバーサル公式・当時業界記事・P-WORLDはRT、本DBでは公式分類を優先して「ボーナス+RT」。5号機クロニクルのA+ART表記は補助資料としてのみ扱う。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
