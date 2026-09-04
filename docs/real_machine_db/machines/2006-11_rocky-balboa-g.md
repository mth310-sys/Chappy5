# ロッキー・バルボアG

machineName: ロッキー・バルボアG
manufacturer: ビスティ
releaseDate: 2006-11
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: PARTIAL
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH

## payoutRateBySetting

UNVERIFIED。

「ロッキー・バルボアG / ロッキー・バルボア / ビスティ / 機械割 / 出玉率 / PAYOUT」で再探索したが、今回設定別機械割表を確定できず。

## initialHitBySetting

UNVERIFIED。

設定別BIG/REG確率について「BIG確率」「REG確率」「ボーナス合算」「設定1〜6」を組み替えて再探索したが、今回比較可能な全設定表を取得できず。

## baseGamesPer50

UNVERIFIED。

「50枚 / 1000円 / ベース / コイン持ち」を加えて再探索したが今回未確定。

## netIncrease

通常時AT/ART純増は該当なし。

ボーナス後RTを搭載するが、今回1Gあたり純増の比較可能値は未確認。

## basicPayout

P-WORLD掲載仕様:
- 赤7BIG: 406枚以上の払い出しで終了、終了後30G RT
- 青7BIG: 406枚以上の払い出しで終了、終了後10G RT
- REG: 12Gまたは4回入賞で終了、終了後10G RT

実獲得純増枚数は今回未確定。

## modeSpecificMinimumData

メーカー公式:
- 2006年11月導入
- ブランド: ビスティ
- 型式名: ロッキー・バルボアG
- 赤7BIG、青7BIG、REGの3ボーナス
- 各ボーナス後に30G/10G/10G RT
- 「ベル・ベル・ゴング」揃いから5G RT
- 旧Aタイプに近いボーナス主体ゲーム性

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機固有の設定変更時RT状態・出目・内部フラグ処理を、表記揺れ・メーカー名・「設定変更/リセット/朝一/据え置き/電源OFF ON」を組み替えて再探索したが直接根拠を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス後RT残G、5G RT状態等の扱いを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時のRT残G・内部状態・出目の扱いを直接確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。P-WORLD/メーカー公式で確認できる本機の主要ゲーム性はボーナス後および特定出目契機の固定G数RTであり、通常時のゲーム数天井・規定G数当選は十分な再探索後も確認できない。RT残G処理そのものは別項目としてUNVERIFIEDを維持する。

ceilingAfterReset: **NOT_APPLICABLE_NO_NORMAL_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更時専用短縮天井・朝一専用天井も確認できず。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED_AFTER_RESEARCH**。通常時の長期モード管理型機としての根拠は確認できない。ただしRT状態の処理はstateAfterResetで未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。赤7後30G RT、青7/REG後10G RT、ベル・ベル・ゴング後5G RT中に設定変更した場合の残G/状態処理は直接資料なし。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用RT、短縮天井、設定変更専用優遇数値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で失う通常天井進捗等は非該当。RT残G消失等は直接確認できないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ等による設定変更判別の本機固有記述を確認できず。

numericResetData:
- 赤7BIG後RT: **30G**
- 青7BIG後RT: **10G**
- REG後RT: **10G**
- ベル・ベル・ゴング揃い後RT: **5G**
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL**。通常ゲーム数天井非確認と固定G数RT構造は高信頼資料で確認。設定変更/据え置き/電断時のRT状態処理・変更判別は未確定。

## sources

取得日: 2026-08-31 / resetBehavior QA再取得日: 2026-09-04

1. SANKYOオンライン博物館 — ロッキー・バルボア
   - https://www.sankyo-fever.jp/collection/861/
   - 2006.11、ビスティ、型式名、ボーナス3種、RT仕様
   - reliability: OFFICIAL
2. P-WORLD — ロッキー・バルボアG
   - https://www.p-world.co.jp/machine/database/4442
   - BIG払い出し終了条件、REG終了条件、各RTゲーム数
   - reliability: INDUSTRY

## missingFields

- 設定別機械割
- 設定別BIG/REG確率
- 50枚あたりゲーム数 / ベース
- BIG/REG実獲得枚数
- RT純増/G
- settingChangeBehavior具体値
- carryOverBehavior
- powerCycleBehavior
- RT中設定変更時のstateAfterReset
- resetDetection

## conflicts

現時点で確定的な数値競合なし。欠損は検索語・資料系統変更後も今回未取得。
