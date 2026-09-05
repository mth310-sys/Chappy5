# ねぇ～ねぇ～島娘

machineName: ねぇ～ねぇ～島娘
manufacturer: オリンピア
releaseDate: 2012-04-16
releaseDatePrecision: exact_day_with_conflict
releaseDateNotes: DK-SIS白書2012およびパチビーは2012-04-16導入開始。K-Naviは2012-04-23ホール導入開始。初打ち投稿でも4/16導入開始表記が当時確認されている。実稼働カレンダーのDK-SISを時系列キーに採用し、4/23はCONFLICTとして保持。
generation: 5号機
systemType: ART / 擬似ボーナス（S-AT） / ゲーム数テーブル+毎ゲーム抽選 / CZ搭載
formalModelName: ねぇ～ねぇ～島娘2
approvalNumber: 2S0138
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.4% |
| 2 | 98.0% |
| 3 | 100.1% |
| 4 | 104.7% |
| 5 | 107.8% |
| 6 | 113.3% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、P-WORLD、CrankySevenで一致。

## initialHitBySetting

| 設定 | BIG平均出現率 | REG平均出現率 | 合成 | BIG初当り |
|---|---:|---:|---:|---:|
| 1 | 1/261.6 | 1/245.1 | 1/126.5 | 1/677.0 |
| 2 | 1/253.5 | 1/204.6 | 1/113.2 | 1/631.0 |
| 3 | 1/232.5 | 1/245.0 | 1/119.3 | 1/643.6 |
| 4 | 1/203.6 | 1/202.6 | 1/101.5 | 1/555.7 |
| 5 | 1/182.4 | 1/241.5 | 1/103.9 | 1/561.3 |
| 6 | 1/157.2 | 1/197.3 | 1/87.5 | 1/483.6 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi/P-WORLD/CrankySevenで主要系列一致。BIG/REGは実ボーナスではなくARTで再現された擬似ボーナスの出現率。

## baseGamesPer50

value: 約33.6G/50枚
reliability: ANALYSIS_HIGH_CROSSCHECKED_APPROX
notes: CrankySevenが33.6Gを直接掲載。パチスロ救急車は約33G、2012-04-19のK-Navi初打ち投稿も1K約30Gという実戦感触で大きく矛盾しない。比較用主値は直接解析値33.6G。

## netIncrease

value: 約+2.7枚/G
reliability: INDUSTRY_CROSSCHECKED
notes: 娯楽産業の2012-03-26発表記事、K-Navi、P-WORLD、コムシード当時アプリ発表で一致。業界初「S-AT」として紹介された。

## basicPayout

- BIG CHANCE: 1セット20ナビ。最低2セット～最大10セット（40～200ナビ）+上乗せ、平均約300枚。1セット20ナビあたり約100枚目安。
- REGULAR CHANCE: 8ナビ固定、約40枚。
- ART純増: 約+2.7枚/G。
- ボーナス終了後CZ「ときめきゾーン」: 5G。

reliability: INDUSTRY_CROSSCHECKED / ANALYSIS_HIGH
notes: 娯楽産業、P-WORLD、K-Naviで主要仕様一致。

## modeSpecificMinimumData

- 通常時は毎ゲーム抽選+ゲーム数テーブルのW抽選。
- 通常時の主要4モード: 通常 / 高確 / 天国A / 天国B。
- BIG側には連チャン・花笠系の複数内部モードが存在する。
- REG後およびBIG後は5Gの「ときめきゾーン」へ移行。
- P-WORLDでは通常モード天井960G / 高確モード天井1152Gと記載。
- CrankySevenおよびパチマガスロマガは最大天井1152Gとして掲載。
- 規定ゲーム数の主要ゾーン: ときめきゾーン後128Gまで、350～550G、650～800G、900G以降。設定変更後も128Gまでがチャンス。

reliability: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_MODE_RELOTTERY_AND_POST_CHANGE_128G_CHANCE_ZONE。設定変更時は通常時モードを専用振り分けで再抽選し、設定変更後128Gまでが規定ゲーム数のチャンスゾーンとなる。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に前日の規定ゲーム数テーブル進捗・モード・BIG系内部状態をどこまで保持するか、本機固有の直接資料を十分な再探索後も確定できず。設定変更専用の再抽選値があることから据え置きとの差は存在するが、具体保持条件を推測しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの場合のゲーム数・モード・液晶/リール状態を確定できる本機固有資料を確認できず。
gameCounterReset: PARTIAL_CONFIRMED_SETTING_CHANGE_USES_DEDICATED_POST_CHANGE_GAME_TABLE。パチマガスロマガが規定ゲーム数の項目で「設定変更後…128Gまで」を独立ゾーンとして明示し、K-Naviも設定変更時にモード再抽選を明示。設定変更後は専用の朝一ゲーム数テーブル/ゾーンから開始することは確認できるが、「前日G数を0Gクリア」と直接表記した別系統資料までは取得できないためCLEAR断定は避ける。
ceilingAfterReset: RESET_SPECIFIC_128G_CHANCE_ZONE_CONFIRMED__EXACT_RESET_CEILING_UNVERIFIED。設定変更後128Gまでが規定ゲーム数のチャンス。短縮天井として128G以内当選確定ではなく「チャンスゾーン」なので、128Gを天井値とは扱わない。設定変更後の最大天井が通常960/1152Gのどちらを参照するかは今回確定できず。
modeAfterReset: CONFIRMED_WITH_PUBLIC_DISTRIBUTION。設定変更時の通常/高確/天国A/天国B振り分けを公開解析で確認。
stateAfterReset: MODE_LEVEL_CONFIRMED。通常/高確/天国A/天国Bの再抽選は確認済み。これ以外の一時的状態・前兆・BIG側ストック状態の処理はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: CONFIRMED。設定変更後は128Gまで規定ゲーム数チャンス。さらに設定変更時モード振り分けで高確以上が設定1で75.5%、設定2・3で80.5%、設定4～6で90.5%となる。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。前日深ハマリ進捗消失の厳密条件を直接確認できていないため不利要素として断定しない。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、パトランプ/ステージ等から設定変更・据え置きを判別できる本機固有の確定資料を確認できず。
publicMorningNumbers: CONFIRMED。設定変更時モード振り分けおよび設定変更後128Gチャンスを公開値として取得。
numericResetData: settingChangeModeDistribution={S1:normal24.5%,high70.0%,heavenA5.0%,heavenB0.5%;S2:normal19.5%,high70.0%,heavenA10.0%,heavenB0.5%;S3:normal19.5%,high70.0%,heavenA10.0%,heavenB0.5%;S4-S6:normal9.5%,high80.0%,heavenA10.0%,heavenB0.5%}; highOrBetterAfterReset={S1:75.5%,S2-S3:80.5%,S4-S6:90.5%}; postSettingChangeGameZone=1-128G_CHANCE; normalCeiling=P-WORLD_NORMAL_MODE_960G_OR_HIGH_MODE_1152G; otherAnalysisMaxCeiling=1152G

notes:
- 「ねぇ～ねぇ～島娘 / ねぇねぇ島娘 / ねぇ〜ねぇ〜島娘 / 型式ねぇ～ねぇ～島娘2 / オリンピア」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / ゲーム数 / モード / モード移行 / ガックン / 50枚 / コイン持ち」を組み替えて再探索。
- DK-SIS、娯楽産業、P-WORLD、K-Navi、パチマガスロマガ、パチビー、CrankySeven、パチスロ救急車、コムシード当時資料を横断。
- 4号機「ねぇ～ねぇ～島娘」および2025年スマスロ「L島娘」の情報は別機種のため流用していない。

resetQaReliability: ANALYSIS_HIGH_FOR_MODE_RELOTTERY_AND_PUBLIC_RESET_NUMBERS__ANALYSIS_HIGH_FOR_128G_POST_CHANGE_ZONE__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_DETECTION_AND_EXACT_COUNTER_CLEAR_WORDING

## conflicts

- `CONFLICT_RELEASE_DATE`: DK-SIS白書2012およびパチビーは2012-04-16導入開始。K-Naviは2012-04-23ホール導入開始。平均せず両方保持し、実稼働カレンダーDK-SISの4/16を時系列キーに採用。
- `CEILING_DEFINITION_NOTE`: P-WORLDは通常モード960G / 高確モード1152GでBIG確定とする一方、CrankySeven・パチマガスロマガは最大天井1152Gを主に掲載。モード別最大値と総称最大天井の定義差として保持し、平均化しない。

## missingFields

- carryOverBehavior exact handling
- powerCycleBehavior exact handling
- exact setting-change game-counter clear wording
- exact maximum ceiling immediately after setting change
- resetDetection

## sources

取得日: 2026-09-05

1. DK-SIS白書2012 2012年4月カレンダー https://www.daikoku.co.jp/wp-content/uploads/siswp/2012/dkwp/files/siswp/2012/HTML/index139.html
   - 4/16導入開始欄にパチスロマクロスフロンティア、ねぇ～ねぇ～島娘を明記。
   - reliability: INDUSTRY
2. 娯楽産業「オリンピア／平和 パチスロ新機種『ねぇ〜ねぇ〜島娘』発表」 https://www.goraku-sangyo.com/%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%82%A2%EF%BC%8F%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%81%AD%E3%81%87%E3%80%9C%E3%81%AD%E3%81%87/
   - 2012-03-26掲載、S-AT純増2.7枚/G、20ナビ1セット、BIG最低2～最大10セット、REG8ナビ、W抽選、ときめきゾーン5G。
   - reliability: INDUSTRY
3. K-Navi「ねぇ～ねぇ～島娘」 https://p-kn.com/slot/1609/
   - 2012-04-23導入表記、設定別BIG/REG/合成/機械割、S-AT純増2.7枚/G、設定変更後攻略索引。
   - reliability: ANALYSIS_HIGH
4. K-Navi「モード移行率(設定変更・フリーズ)」 https://p-kn.com/slot/1609/37635/
   - 設定変更時の通常/高確/天国A/天国B振り分けを設定別に直接掲載。
   - reliability: ANALYSIS_HIGH
5. K-Navi「内部モードの基本」 https://p-kn.com/slot/1609/37631/
   - 通常時4モード、設定変更がモード移行契機であることを確認。
   - reliability: ANALYSIS_HIGH
6. P-WORLD「ねぇ～ねぇ～島娘」 https://www.p-world.co.jp/machine/database/6685
   - 型式名ねぇ～ねぇ～島娘2、検定番号2S0138、設定別確率/機械割、BIG平均300枚/REG約40枚、純増2.7枚/G、通常960G/高確1152G天井、内部モード。
   - reliability: OLD_DATABASE / ANALYSIS_HIGH
7. パチマガスロマガ「ねぇ～ねぇ～島娘 REG当選契機」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/103/i.php
   - 規定ゲーム数の設定変更後128Gまで、通常ゾーン、天井1152G、毎ゲームREG抽選等。
   - reliability: ANALYSIS_HIGH
8. パチビー「ねぇ～ねぇ～島娘」 https://www.pachibee.jp/machines/lecture/212030003
   - 導入日2012-04-16、内部モード/ゲーム数テーブル概要。
   - reliability: OLD_DATABASE / ANALYSIS_HIGH
9. CrankySeven「ねぇ～ねぇ～島娘」 https://crankyseven.com/nenesimamusume-pc.htm
   - 50枚33.6G、設定別主要確率/機械割、純増2.7枚/G、最大天井1152G、設定変更後128Gチャンス。
   - reliability: ANALYSIS_SINGLE_CROSSCHECKED
10. パチスロ救急車「ねぇ～ねぇ～島娘」 https://www.eightbeat.com/slot99/kishu/na_gyou/ne/neneshimamusume/page_menu.html
   - 1000円あたり約33G、純増2.7枚/G、通常時モード概要。
   - reliability: ANALYSIS_SINGLE
11. コムシード「ねぇ～ねぇ～島娘 Androidアプリ配信開始」 https://www.commseed.net/news-old/120525_p1.html
   - 2012年春登場、オリンピア実機、業界初S-AT搭載の当時周辺資料。
   - reliability: INDUSTRY_RELATED
