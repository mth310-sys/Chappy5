# シャア専用パチスロ 逆襲の赤い彗星

No: 1363
machineName: シャア専用パチスロ 逆襲の赤い彗星
machineNameVariants: シャア専用パチスロ 逆襲の赤い彗星 / シャア専用パチスロ逆襲の赤い彗星 / Sシャア専用パチスロ 逆襲の赤い彗星G
manufacturer: ビスティ
releaseDate: 2020-08-03
formalModelName: Sシャア専用パチスロ 逆襲の赤い彗星G
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6号機
systemType: AT / 高純増ゲーム数上乗せ型AT / CZ経由主体

## identity / release
- SANKYOオンライン博物館はブランドをビスティ、導入年月を2020.08と掲載。
- 遊技日本/PiDEAの検定通過記事で型式 `Sシャア専用パチスロ 逆襲の赤い彗星G`、メーカー ビスティを確認。
- K-Navi、グリーンべると、2020年新台カレンダーでホール導入開始2020-08-03が一致。
- 検定番号は型式名を含め複数系統で再探索したが今回固定できず、推測補完しない。

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.3% |
| 2 | 99.1% |
| 3 | 100.6% |
| 4 | 103.2% |
| 5 | 106.3% |
| 6 | 110.1% |
- K-Navi、P-WORLD、2-9伝説、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT「NEO ZEON RUSH」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/1066.61 |
| 2 | 1/926.43 |
| 3 | 1/849.45 |
| 4 | 1/746.17 |
| 5 | 1/659.91 |
| 6 | 1/583.33 |
- K-Naviの精密値をcanonicalとし、P-WORLD/2-9伝説/ちょんぼりすたの丸め値（1/1067〜1/583）と整合。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51G/50枚。
- ちょんぼりすた、イチカツ、すろぱちくえすと等で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「NEO ZEON RUSH」: 約8.0枚/G。
- SANKYO公式博物館、グリーンべると、P-WORLD、パチマガスロマガ等で一致。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「NEO ZEON RUSH」はゲーム数上乗せ型。
- AT突入時の「MS ATTACK」で初期ゲーム数を決定。
- 後発解析では初期70G以上、平均約120G、1回あたり期待枚数約1000枚の整理がある。
- 固定枚数管理ではないため、物差し値として単一の保証獲得枚数には換算しない。
- 上位「NEO ZEON RUSH MAX」は有利区間完走濃厚とされる。

## modeSpecificMinimumData
- 通常時は最大250G+αでCZ「百式BATTLE」へ到達。
- 天井恩恵はCZ当選でありAT確定ではない。
- CZ「百式BATTLE」は敵MS3体撃破でAT。解析上のAT期待度は約28%。
- 通常時にジオンポイント/コンテナを獲得し、CZの撃破率を上げる構造。
- 内部撃破率モードは通常 / チャンス / MAXチャレンジの3種類。
- 有利区間はCZ複数回を跨いで継続することがあり、主要攻略ではCZ3回を1セットとする整理がある。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_SETTING1_MODE_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 内部状態RESET。
- 有利区間RESET、有利区間ランプ消灯。
- 非有利区間「出撃待機モード」を経由し、撃破率モード抽選後に新しい有利区間を開始する。
- reliability: ANALYSIS_HIGH（複数攻略資料一致）

### carryOverBehavior
- 据え置き時は内部天井ゲーム数をCARRY_OVER。
- 内部状態をCARRY_OVER。
- 有利区間/有利区間ランプ状態をCARRY_OVERするのが朝一比較表の基本契約。
- MAXチャレンジ状態でCZ失敗後に有利区間を引き継いだ場合、次回CZもMAXチャレンジ濃厚とされるため、設定変更で消去される区間継続価値と区別する。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 有利区間ランプは点灯状態を引き継ぐのが主要朝一比較表の整理。
- 電断後の具体的開始ステージは当時解析で「調査中」のままのため `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH for ceiling/state/section carry-over

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常時最大250G+αでCZ「百式BATTLE」。

### ceilingAfterReset
- 設定変更後も通常の最大250G+αでCZ。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井恩恵はCZでありAT確定ではない。

### modeAfterReset
- 設定変更後は非有利区間「出撃待機モード」で撃破率モードを新規抽選。
- 通常 / チャンス / MAXチャレンジの3モード。
- 設定1の公開振り分けは 68.38% / 22.48% / 9.14%。
- これは「設定変更専用テーブル」ではなく、非有利区間で行われる一般モード抽選。設定変更後も非有利区間を経由するため朝一比較値として保存する。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 非有利区間では撃破率モード抽選を行う。

### advantageousSectionReset
- 設定変更: RESET → 有利区間ランプ消灯 → 非有利区間。
- 据え置き / 純電源OFF→ON: CARRY_OVER → 通常時はランプ点灯を維持するのが基本。
- CZ/AT終了後にも有利区間がリセット/継続するため、朝一ランプ判別は前日終了状況とホール対策の例外を考慮する。

### resetBenefits
- 設定変更専用の天井短縮・AT直撃優遇など明確な固有恩恵は確認できず、主要攻略でも「特になし」と整理される。
- 設定変更後は非有利区間を経由して撃破率モードを新規抽選するが、これは新規有利区間開始の一般契約として扱い、リセット専用恩恵に数えない。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置き側でMAXチャレンジ等の有利区間継続状態を保持していた場合、設定変更でその継続価値が消える可能性はあるが、設定変更固有の定量ペナルティとしては公表されていない。

### resetDetection
- 通常時は有利区間ランプ常時点灯型。
- 朝一ランプ消灯: 設定変更濃厚。
- 朝一ランプ点灯: 据え置き濃厚。
- 対策されていない場合に限ると明記する攻略資料があり、確定判別として扱わない。
- 本機固有のガックン条件・発生率は、機種名/型式名と `ガックン / 設定変更 / 朝一 / リール` を組み替えて再探索したが高信頼契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
非有利区間「出撃待機モード」での撃破率モード振り分け（設定1）:
| モード | 選択率 |
|---|---:|
| 通常 | 68.38% |
| チャンス | 22.48% |
| MAXチャレンジ | 9.14% |
- 1gekiが設定1解析値として掲載。
- 設定変更後も非有利区間を経由するため朝一比較値に使えるが、設定変更時だけの専用抽選ではない。
- 設定変更専用短縮天井: NONE_CONFIRMED。
- リセット恩恵発生率: NONE_CONFIRMED_AS_DISTINCT_RESET_BENEFIT。

## resetBehavior 再探索メモ
2026-09-11。`シャア専用パチスロ 逆襲の赤い彗星 / Sシャア専用パチスロ 逆襲の赤い彗星G / ビスティ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 内部状態 / モード / 有利区間 / 有利区間ランプ / ガックン` を組み替え、SANKYO公式博物館、業界記事、P-WORLD、K-Navi、1geki、パチマガスロマガ、ちょんぼりすた、すろぱちくえすと、2-9伝説、旧攻略資料を横断。天井・状態・有利区間のRESET/CARRY_OVER、ランプ判別、非有利区間の設定1モード振り分けまで複数系統で固定。純電断後の開始ステージと本機固有ガックン契約は未固定のため推測補完しない。

## sources
取得日: 2026-09-11

1. SANKYOオンライン博物館「シャア専用パチスロ 逆襲の赤い彗星」
   - https://www.sankyo-fever.jp/collection/907/
   - ビスティ、導入年月2020.08、最大250G+α、AT純増約8.0枚/Gを確認。
   - reliability: OFFICIAL
2. グリーンべると「（8/3導入）『シャア専用パチスロ 逆襲の赤い彗星』～純増8枚のAT機」
   - https://web-greenbelt.jp/post-40221/
   - 2020-08-03導入、ビスティ、最大250G+α CZ、AT純増約8枚/Gを確認。
   - reliability: INDUSTRY
3. 遊技日本「Sシャア専用パチスロ 逆襲の赤い彗星G 検定通過」
   - https://yugi-nippon.com/pachinko-new-machine/post-35338/
   - 正式型式名とビスティを確認。
   - reliability: INDUSTRY
4. K-Navi「シャア専用パチスロ 逆襲の赤い彗星」
   - https://p-kn.com/slot/3448/
   - 2020-08-03導入、設定別AT初当たり精密値、機械割を確認。
   - reliability: ANALYSIS_HIGH
5. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9202
   - 設定別AT初当たり/機械割、AT・CZ基本仕様を照合。
   - reliability: INDUSTRY_DB / ANALYSIS_HIGH
6. 1geki「出撃待機モード(非有利区間)」
   - https://1geki.jp/slot/s_char/21/
   - 設定変更時等に非有利区間へ入り撃破率モード抽選、設定1モード振り分け68.38/22.48/9.14%を確認。
   - reliability: ANALYSIS_HIGH
7. スロットセブン「朝一解析」
   - https://slot-seven.com/syasenyopatisuro-tenzyou/
   - 設定変更: 天井/内部状態RESET・ランプ消灯、電源OFF→ON: 天井/内部状態CARRY_OVER・ランプ点灯を確認。
   - reliability: ANALYSIS_HIGH
8. 2-9伝説「天井恩恵・スペック解析」
   - https://2-9densetsu.com/gyakuchar/
   - 天井250G+α CZ、設定変更で天井RESET、設定別機械割/AT初当たりを照合。
   - reliability: ANALYSIS_HIGH
9. ちょんぼりすた「天井 有利区間 設定判別」
   - https://chonborista.com/slot/bisty-slot/114413/
   - 約51G/50枚、250G CZ、有利区間ランプによる朝一判別、内部モードを照合。
   - reliability: ANALYSIS_HIGH
10. パチマガスロマガ「NEO ZEON RUSH / 百式BATTLE / MS ATTACK」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/38/at01-2.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/38/cz01-1.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/38/at03.php
   - AT純増、初期G決定、CZ構造を確認。
   - reliability: ANALYSIS_HIGH
11. 2020新台導入日カレンダー
   - https://pachinkopachisro.com/archives/53951811.html
   - 2020-08-03のパチスロ候補として本機を確認し、同日群監査に使用。
   - reliability: ANALYSIS_SINGLE / calendar cross-check

## missingFields
- 検定番号
- 純電断後の具体的開始ステージ
- 本機固有のガックン条件/発生率

## conflicts
- 設定別主要性能は明確な競合なし。AT初当たりは精密値と丸め値の差のみ。
- 有利区間ランプ位置について「2BET右」「3BET隣」の表現差があるが、同一ランプを示す表示説明差として数値CONFLICTにはしない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_SETTING1_MODE_DATA
