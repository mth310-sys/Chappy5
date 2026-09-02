# めぞん一刻2

machineName: めぞん一刻2（めぞん一刻～あなたに会えて、本当によかった～）
manufacturer: オリンピア
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-08-24（K-Naviホール導入開始）
generation: 5号機
systemType: ボーナス+ART / ゲーム数管理ART / 無限ART / 振り分け型天井
coreStatus: PARTIAL_BASE_AND_FORMAL_MODEL_UNVERIFIED

## payoutRateBySetting

当時パチマガスロマガのシミュレート値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.88% |
| 2 | 99.78% |
| 3 | 102.10% |
| 4 | 104.78% |
| 5 | 107.96% |
| 6 | 112.16% |

confidence: OLD_ANALYSIS_HIGH_SINGLE_DIRECT_TABLE

## initialHitBySetting

当時パチマガスロマガ解析 / K-Navi:

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/397.19 | 1/485.45 | 1/218.45 |
| 2 | 1/381.02 | 1/468.11 | 1/210.05 |
| 3 | 1/364.09 | 1/451.97 | 1/201.65 |
| 4 | 1/346.75 | 1/431.16 | 1/192.19 |
| 5 | 1/332.67 | 1/412.18 | 1/184.09 |
| 6 | 1/315.08 | 1/390.10 | 1/174.30 |

- K-Naviの丸め表示（BIG 1/397→1/315、REG 1/485→1/390、合算1/218→1/174）と整合。

confidence: OLD_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

- `めぞん一刻2 / めぞん2 / オリンピア / 50枚 / 1000円 / ベース / コイン持ち / 小役確率` を組み替え、当時パチマガスロマガ、K-Navi、後年回顧、天井資料を横断したが、比較可能な50枚あたりゲーム数の直接値を今回確定できず。
- 小役からの逆算は行わない。

## netIncrease

- ART「ドラマチックタイム」: 1セット50G。
- K-Navi / 当時パチマガスロマガ: 約+1.0枚/G。
- パチセブン後年回顧: 約+0.9枚/G。
- 定義/丸め差を解消できないため `CONFLICT_NET_INCREASE_0_9_VS_1_0` として保持。

confidence: ANALYSIS_HIGH_WITH_RETROSPECTIVE_CONFLICT

## basicPayout

- BIG: 約250枚（330枚超払い出しで終了）
- REG: 約50枚（48枚超払い出しで終了）

当時パチマガスロマガ、K-Navi、後年回顧で整合。

## modeSpecificMinimumData

- ART「ドラマチックタイム」は50G/セット。残りARTゲーム数はボーナス後も持ち越す。
- 無限ART「ドラマチックタイムSP」あり。
- 最大天井1590G到達時は、無限ARTを80%で継続する「ウエディングモード」へ移行する資料を確認。
- 1590G未満にも振り分け型天井があり、浅い天井ではドラマチックタイムSPへ突入。
- 後年回顧では選択されやすい代表点として510G（五代）・950G（響子）を記載。天井基礎ゲーム数は100G刻みで選ばれ、発動まで追加G数が加算される説明がある。
- 当時系の別資料では前作めぞん2について500G振り分け10%、900G振り分け20%との整理もある。510/950との表現差は「基礎G+追加G」の可能性があるため、同一数値として安易に統合せず注記保持。

## resetBehavior — v0.7

settingChangeBehavior: CONFIRMED_RESET_RESEEDS_CEILING_AND_ERASES_ART_STOCK。2009-11-09の当時ブログ解析で「設定変更時はART＆ストック消滅」「天井ゲーム数の再リセット」と明記。後年天井狙い整理でも本機は「宵越し×」「設定変更時天井ゲーム数再セット」と一致。

carryOverBehavior: PARTIAL_CONFIRMED_BY_CONTRAST。設定変更時に天井再セットされ、後年整理が「宵越し×」とするため設定変更時は前日ゲーム数を引き継がないことは確認。純粋な据え置き時に天井カウンタ・ART/ストック・内部状態がどの範囲で保持されるかを直接列挙した資料は未確認。前日G+当日Gで設定変更/据え置きを推測する当時記述は据え置き時カウンタ継続を強く示すが、一般化しすぎず `COUNTER_CARRYOVER_STRONGLY_INDICATED` とする。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ON時の天井カウンタ、ART/ストック、内部状態の保持/初期化を本機固有の直接資料で確定できず。

gameCounterReset: CONFIRMED_RESET_ON_SETTING_CHANGE。設定変更時は天井ゲーム数を再セット。後年天井狙い整理でも宵越し不可・設定変更時再セットと一致。

ceilingAfterReset: CONFIRMED_RESELECTION_WITH_PUBLIC_MORNING_DISTRIBUTION_SUMMARY。当時ブログ解析で設定変更後は「50%の割合で590G以内、85%の割合で990G以内」に天井発動と記載。固定短縮天井ではなく、設定変更時に天井ゲーム数を再抽選するタイプとして保存。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時専用の高確/通常等モード振り分けは直接資料を確定できず。天井ゲーム数再抽選と内部モード再抽選を同義扱いしない。

stateAfterReset: PARTIAL_CONFIRMED_ART_AND_STOCK_ERASED。設定変更時はART＆ストック消滅を確認。高確状態等の初期状態振り分けはUNVERIFIED。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: CONFIRMED。設定変更後の再抽選天井は50%で590G以内、85%で990G以内に発動するという公開朝一数値あり。

resetPenalties: CONFIRMED。設定変更時はART＆ストック消滅。

resetDetection: PARTIAL_CONFIRMED_DIFFICULT_WITH_CEILING_PRECURSOR_METHOD。当時ブログ解析では設定変更しても液晶＆次回エピソードは変化せず、設定変更判別はかなり難しいとする。一方、天井発動約10G前から「ぴよぴよ演出」が頻発するため、前日G数+当日G数との照合で変更/据え置きを推測できる方法を提示。ガックンについては本機固有の直接根拠を確認できず。

numericResetData:
  normalMaximumCeiling: 1590G
  normalFrequentCeilingPoints: 510G_and_950G_retrospective_description
  resetCeilingReselection: CONFIRMED
  resetCeilingWithin590G: 50%
  resetCeilingWithin990G: 85%
  resetARTStock: ERASED
  resetLiquidDisplayChange: NONE_CONFIRMED
  resetNextEpisodeDisplayChange: NONE_CONFIRMED
  ceilingPrecursorDetection: about_10G_before_activation_piyopiyo_frequency_increase

resetBehaviorQA: SUBSTANTIAL_RESET_DATA_CONFIRMED_POWER_CYCLE_AND_INTERNAL_MODE_UNVERIFIED

resetBehaviorResearchNote:
- `めぞん一刻2 / めぞん2 / あなたに会えて本当によかった / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井振り分け / 590G / 990G / 1590G / ガックン / 液晶 / ARTストック` を組み替えて再探索。
- K-Navi、当時パチマガスロマガ、2009年当時ブログ解析、後年天井狙い整理、パチセブン回顧を横断。
- 設定変更時の天井再抽選数値は直接保存し、単純電断や内部高確モードは推測で補完しない。

## sources

取得日: 2026-09-03

1. K-Navi「めぞん一刻2」 — https://p-kn.com/slot/1025/ — 2009-08-24ホール導入、BIG/REG/合算、BIG330枚超・REG48枚超払い出し終了、ART50G・約+1.0枚/G — reliability: OLD_ANALYSIS_HIGH
2. パチマガスロマガ「パチスロめぞん一刻2 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/86/a.php — BIG約250枚、REG約50枚、ART50G、約+1枚/G、ARTゲーム数持ち越し — reliability: OLD_ANALYSIS_HIGH
3. パチマガスロマガ「ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/86/h.php — 設定別BIG/REG/合算、シミュレートPAYOUT 97.88〜112.16% — reliability: OLD_ANALYSIS_HIGH
4. パチマガスロマガ「機種トップ」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/86/olympia_slot_86.php — 天井・攻め時/ヤメ時/設定変更時等の専用解析項目の存在確認 — reliability: OLD_ANALYSIS_HIGH
5. 戦慄の舞日記 2009-11-09「めぞん一刻2解析」 — https://plaza.rakuten.co.jp/sennritunomaiou/diaryall/ — 設定変更でART＆ストック消滅、天井再セット、50%で590G以内/85%で990G以内、液晶＆次回エピソード不変、天井前兆を利用した変更判別 — reliability: CONTEMPORARY_SECONDARY_ANALYSIS_SINGLE
6. 天井ハイエナ生活「め 天井ハイエナ期待値リスト」 — https://macerate.seesaa.net/article/268277971.html — めぞん一刻2はボーナス間900G狙い、宵越し×、設定変更時天井ゲーム数再セット、ART純増1.0枚 — reliability: RETROSPECTIVE_ANALYSIS
7. パチセブン「『最強のプレミア』捨てました～めぞん一刻2～」2020-09-01 — https://pachiseven.jp/articles/detail/11783 — 2009年夏、BIG約250枚/REG約50枚、ART約0.9枚/G、最大天井1590G、510G/950G代表天井、浅い天井はDT SP、1590Gはウエディングモード — reliability: RETROSPECTIVE_INDUSTRY_MEDIA
8. 目指せ月収20万！パチスロ天井解析攻略ブログ「めぞん一刻3 天井G数振り分け」 — https://mezase20.com/blog-entry-588.html — 前作めぞん一刻2の500G 10% / 900G 20%という回顧比較値 — reliability: RETROSPECTIVE_SECONDARY

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset internal high/normal mode distribution: UNVERIFIED_AFTER_RESEARCH
- reset-specific gakkun behavior: UNVERIFIED_AFTER_RESEARCH

## conflicts

- netIncrease: K-Navi/当時パチマガスロマガ約+1.0枚/G vs パチセブン後年回顧約+0.9枚/G。平均せず保持。
- ceiling point notation: 後年回顧の510G/950Gと、別回顧の500G/900Gは発動追加Gを含む表現差の可能性があるが直接解消できない。数値を混合せず双方の定義を注記保持。
