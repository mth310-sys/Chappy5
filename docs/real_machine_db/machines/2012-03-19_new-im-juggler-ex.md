# ニューアイムジャグラーEX

machineName: ニューアイムジャグラーEX
manufacturer: 北電子
releaseDate: 2012-03-19
releaseDatePrecision: exact_day_conflict
releaseDateNotes: HAZUSEは2012-03-19導入開始。K-Naviおよびアタリ7は2012-04-02ホール導入開始/導入日としており、同一型式ニューアイムジャグラーEX-Cについて具体日が競合する。平均せずCONFLICTとして保持し、時系列漏れ防止のため最古具体日2012-03-19を本線キーに採用。
generation: 5号機
systemType: ノーマル / ボーナス主体 / 完全告知
formalModelName: ニューアイムジャグラーEX-C
approvalNumber: 1S1213
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## payoutRateBySetting

### メーカー公表値

| 設定 | 出玉率 |
|---|---:|
| 1 | 95.85% |
| 2 | 96.70% |
| 3 | 98.71% |
| 4 | 100.80% |
| 5 | 102.80% |
| 6 | 105.16% |

reliability: OFFICIAL
notes: 北電子公式。工場データから算出した予測値として掲載。

### チェリー狙い解析値

| 設定 | 機械割 |
|---|---:|
| 1 | 96.91% |
| 2 | 97.80% |
| 3 | 99.91% |
| 4 | 102.04% |
| 5 | 104.16% |
| 6 | 106.55% |

reliability: ANALYSIS_HIGH
notes: 通常時ベル・ピエロを取得せずチェリー狙い時の解析値。メーカー公表値とは定義が異なるためCONFLICTではなく別定義として保持。

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/287.4 | 1/455.1 | 1/176.2 |
| 2 | 1/282.5 | 1/442.8 | 1/172.5 |
| 3 | 1/282.5 | 1/348.6 | 1/156.0 |
| 4 | 1/273.1 | 1/321.3 | 1/147.6 |
| 5 | 1/273.1 | 1/268.6 | 1/135.4 |
| 6 | 1/268.6 | 1/268.6 | 1/134.3 |

reliability: OFFICIAL
notes: 北電子公式。HAZUSE、K-Navi、P-WORLD、後年解析でも同系統値を照合。

## baseGamesPer50

valueBySetting: 35.00 / 35.00 / 35.01 / 35.01 / 35.02 / 36.38 G
sourceDefinition: チェリー狙い時の50枚あたり回転数。
reliability: ANALYSIS_HIGH
notes: 後年解析2系統で同系統値を確認。設定6のみブドウ確率差により高い。

## netIncrease

- NOT_APPLICABLE_NORMAL_TYPE

## basicPayout

- BIG: 約325枚
- REG: 約104枚

reliability: OFFICIAL_AND_INDUSTRY_HIGH
notes: 北電子の同一スペック後継型式EX-KT公式でBB約325枚/RB約104枚を明記。HAZUSE、P-WORLD、解析資料でも一致。EX-C配当条件はBIG 336枚超払い出し終了、REG 98枚超払い出し終了。

## modeSpecificMinimumData

- ボーナスのみで出玉を増やす5号機ノーマルタイプ。
- 天井機能非搭載。
- ART/AT/CZ、規定ゲーム数モード、有利区間は非該当。
- 完全告知GOGO!ランプ。先告知約1/4、後告知約3/4。

reliability: OFFICIAL_AND_ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: ノーマルタイプでゲーム数天井・ART/ATモード・規定ゲーム数状態を持たないため、それらの設定変更リセット恩恵/不利はNOT_APPLICABLE。本機固有の変更判別として、設定変更後に店側が1G回していなければ朝一1G目でリールのガックンが発生し得ると複数解析資料で確認。
carryOverBehavior: ゲーム数天井・モード・ART/AT状態はNOT_APPLICABLE。ボーナス確率は設定値に従う通常ノーマル機であり、朝一専用モード/宵越し天井はNONE_CONFIRMED_AFTER_RESEARCH。その他の内部一時状態について据え置き固有処理を示す公開資料はUNVERIFIED_AFTER_RESEARCH。
powerCycleBehavior: 単純電源OFF→ONだけの場合のリール初動/ガックン差や内部一時状態を本機固有資料で直接確定できずUNVERIFIED_AFTER_RESEARCH。設定変更と同義とは扱わない。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING
modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_OR_ART_MODE; morning-specific mode NONE_CONFIRMED_AFTER_RESEARCH
stateAfterReset: ART/AT高確等はNOT_APPLICABLE。設定変更専用の内部状態優遇はNONE_CONFIRMED_AFTER_RESEARCH。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: 設定変更専用の短縮天井、朝一高確、特定G以内優遇等はNONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: 設定変更専用のゲーム数損失/天井進捗消去はNOT_APPLICABLE_NO_CEILING。その他の不利要素はNONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: CONDITIONAL_GAKKUN_CONFIRMED。設定変更後に店側が回していない場合、朝一1G目にリールがガクッと始動する変更判別要素がある。ただし個体差や微小なガックン、店側の事前1G回しで判別不能になるため確定判別ではない。別資料では目視困難なほど僅かなブレとの記述もあり、強度についてCONFLICT/VARIATIONとして保持。
publicMorningNumbers: reset-specific hit rate NONE_CONFIRMED_AFTER_RESEARCH; shortened ceiling NOT_APPLICABLE; morning mode distribution NOT_APPLICABLE/NONE_CONFIRMED
numericResetData: normalCeiling=NONE; shortenedCeilingAfterReset=NOT_APPLICABLE; morningHitRate=NONE_CONFIRMED; gakkunOnSettingChange=CONDITIONAL_CONFIRMED

notes:
- 「ニューアイムジャグラーEX / ニューアイム / ニューアイジャグ / ニューアイムジャグラーEX-C / 北電子 / 1S1213」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン」を組み替えて再探索。
- 一般ジャグラー仕様だけでは確定せず、本機名を明示するガックン解説を採用。
- 電源OFF→ON単独の挙動は本機固有の直接根拠を確定できず推測補完しない。

resetQaReliability: ANALYSIS_HIGH_FOR_GAKKUN__OFFICIAL_FOR_NO_ART_STRUCTURE__UNVERIFIED_FOR_POWER_CYCLE

## conflicts

- releaseDate: HAZUSE=2012-03-19導入開始、K-Navi=2012-04-02ホール導入開始、アタリ7=2012-04-02導入日。平均せず双方保持。
- resetDetection strength: 解析資料Aは朝一1G目でガックンが有効と説明、別資料は目視判別が難しいほど僅かなブレと説明。発生有無と視認性を分離し、確定判別とはしない。

## missingFields

- powerCycleBehavior exact machine-specific handling
- exact conditions separating setting-change gakkun from simple power cycle

## sources

取得日: 2026-09-05

1. 北電子公式「ニューアイムジャグラーEX」 https://www.kitadenshi.co.jp/slot/newimjugglerex/
   - 設定別BB/RB/合算/出玉率。
   - reliability: OFFICIAL
2. 北電子公式「ニューアイムジャグラーEX-C 検定情報」 https://www.kitadenshi.co.jp/slot-kentei/newimjugglerex/
   - 型式名、各都道府県の検定公示情報。
   - reliability: OFFICIAL
3. HAZUSE「ニューアイムジャグラーEX」 https://hazuse.com/machine/pachislot/SX0042/
   - 2012-03-19導入、型式名ニューアイムジャグラーEX-C、検定番号1S1213、機械割、天井非搭載、基本仕様。
   - reliability: ANALYSIS_HIGH / OLD_DATABASE
4. K-Navi「ニューアイムジャグラーEX」 https://p-kn.com/slot/1592/
   - 2012-04-02ホール導入開始、設定別ボーナス確率、ノーマル/完全告知。
   - reliability: ANALYSIS_HIGH
5. P-WORLD「ニューアイムジャグラーEX」 https://www.p-world.co.jp/machine/database/6641
   - 5号機ノーマル、BIG約325枚、BG約104枚、機種概要。
   - reliability: INDUSTRY_DATABASE_HIGH
6. 激アツ「ニューアイムジャグラーEX 設定判別・解析」 https://gekiatsu7.com/slot-analyze/1995/
   - チェリー狙い機械割、50枚あたり回転数、設定変更後の朝一ガックン。
   - reliability: ANALYSIS_HIGH
7. JUGJUG「ニューアイムジャグラーEX」 https://jugjug.net/newimjugglerex
   - メーカー値/解析値整理、朝一ガックンは目視困難な微小ブレとの記述。
   - reliability: ANALYSIS_SINGLE
8. アタリ7「ニューアイムジャグラーEX」 https://www.atari7.com/slot/new-imjuggler-ex-2012.php
   - 2012-04-02導入、設定別スペック。
   - reliability: ANALYSIS_HIGH
