# スマスロ ゲゲゲの鬼太郎 覚醒

recordNo: 1667
machineName: スマスロ ゲゲゲの鬼太郎 覚醒
aliases: Lゲゲゲの鬼太郎 覚醒 / ゲゲゲの鬼太郎 覚醒 / スマスロゲゲゲの鬼太郎
manufacturer: JFJ（藤商事グループ）
formalModel: Lゲゲゲの鬼太郎 覚醒JC
inspectionCode: 4S0089
releaseDate: 2024-08-05
generation: 6.5号機 / スマスロ
systemType: AT / セット継続型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- JFJ公式製品ページで機種名と設定別CZ/AT確率を確認。
- Amusement Japanの2024-06-13業界記事でJFJ製、藤商事販売発表、AT純増約5.0枚/G、セット継続型ATを確認。
- HAZUSEで型式 `Lゲゲゲの鬼太郎 覚醒JC`、検定番号 `4S0089`、メーカーJFJ、導入開始日2024-08-05を照合。
- パチビーでも2024-08-05導入を照合。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.3%
- setting4: 105.6%
- setting5: 110.8%
- setting6: 114.9%
initialHitBySetting:
- setting1: CZ 1/222.3 / AT 1/421.1
- setting2: CZ 1/219.8 / AT 1/413.6
- setting3: CZ 1/217.0 / AT 1/403.4
- setting4: CZ 1/206.8 / AT 1/378.5
- setting5: CZ 1/197.2 / AT 1/361.7
- setting6: CZ 1/191.6 / AT 1/349.8
baseGamesPer50: 約30.6〜31.0G/50枚
netIncrease: AT 約5.0枚/G
basicPayout:
- AT「ゲゲゲRUSH」: 1セット25G、初回墓場ステージ開始時は40G保障
- ATレベル1「墓場」: トータル継続率約51%
- ATレベル2「激闘」: トータル継続率約62%
- ATレベル3「覚醒」: トータル継続率約80%
- 「ゲゲゲBONUS」: 平均獲得約150枚
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は妖気目/チャンス目、妖気ポイント、人魂カウンタ、規定ゲーム数等を契機にCZ「ゲゲゲBATTLE」またはATを目指す。
- CZ「ゲゲゲBATTLE」成功期待度は約51%。
- 通常時最大1200G+αでAT「ゲゲゲRUSH」+「ねこ娘CHANCE」。
- 妖気ポイント天井は最大30pt。設定変更時は妖気ポイント天井を再抽選するが、詳細な全振り分けは朝一行動へ必要な範囲のみ保持。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GAKKUN_AND_RESET_DETECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 通常天井進行をRESETし、内部ゲーム数を0〜150Gランダム加算した状態から開始する。
- 内部状態RESET。
- 人魂カウンタ/妖気ポイントRESET後、設定変更用の妖気ポイント天井を再抽選。
- 朝一開始ステージは都会ステージとする複数解析資料あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間・天井進行・ゲーム数カウンタ・妖気ポイント/人魂カウンタ・内部状態を引継ぐ。
- 設定変更専用の0〜150G内部加算や天井到達時ATレベル2優遇は据え置き契約には適用しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ONでは有利区間・天井進行・内部ゲーム数・妖気ポイント・内部状態をCARRY_OVER。
- 朝一液晶ステージは都会ステージとする資料があるが、純電断前ステージの復帰規則そのものは主要解析で完全契約を固定できず、判別材料としては採用しない。
confidence: ANALYSIS_HIGH_FOR_COUNTER_AND_STATE / UNVERIFIED_FOR_PRECISE_STAGE_RESTORE

### gameCounterReset
- 設定変更: RESET後、内部的に0〜150Gをランダム加算。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常天井: 1200G+α。
- 設定変更後は内部ゲーム数0〜150G加算のため、実際に打つゲーム数ベースでは約1050〜1200G+αで天井到達し得る。
- 固定の専用短縮天井へ置換する方式ではなく、ランダム内部加算による0〜150G短縮。
- 設定変更後に天井到達した場合はATレベル2「激闘」からAT開始。
- 設定変更後1回目のATが天井当選だった場合、次回ATも天井到達なら再度ATレベル2「激闘」開始となる解析あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用の単一モード名・全モード振り分け表は主要資料横断で確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時は妖気ポイント天井を再抽選し、15〜30pt側が選ばれやすい公開傾向あり。
- 通常時の全モード移行率はミッション範囲外。
confidence: ANALYSIS_HIGH_FOR_YOKI_RESET / UNVERIFIED_FOR_NAMED_RESET_MODE

### stateAfterReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 営業中のAT中有利区間リセット恩恵は別契約として扱う。必勝本では営業中リセット時に天井到達ATレベル2開始等の恩恵を公開しているが、朝一設定変更契約と混同しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- 内部ゲーム数0〜150G加算により通常1200G+α天井が最大150G分短縮され得る。
- 設定変更後の天井到達時はATレベル2「激闘」から開始。
- 設定変更後600G以内のAT当選時は「ねこ娘CHANCE」獲得抽選が優遇。
- 妖気ポイント天井を朝一用に再抽選し、主要解析では15〜30ptが選ばれやすい傾向。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行、妖気ポイント、人魂カウンタ、内部状態は設定変更で消去されるため、前日が有利な蓄積状態なら設定変更は客側に不利となり得る。
- 固定公開値としての朝一不利率は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / UNVERIFIED_FOR_NUMERIC_PENALTY

### resetDetection
- 内部0〜150G加算のため、朝一の規定G数挙動は表示ゲーム数と内部進行が一致しない可能性があり、設定変更推測材料となるが確定判別ではない。
- なな徹の機種専用「リセット判別」は2026-05更新時点でも「現在調査中」。
- 本機固有のリールガックン条件/発生率は、機種名・型式・JFJ/藤商事 + 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンへ検索語を変えて再探索したが、信頼できる固定契約を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_DEFINITIVE_DETECTION

### numericResetData
- 通常天井: 1200G+α
- 設定変更時内部ゲーム数加算: 0〜150G
- 実打ベース設定変更後天井レンジ: 約1050〜1200G+α
- 設定変更後600G以内AT: ねこ娘CHANCE獲得抽選優遇（具体率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）
- 設定変更時妖気ポイント天井: 3/5/7/10ptは低、15/20/25/30ptは中という公開傾向
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### publicMorningNumbers
- 0〜150G: 設定変更時の内部ゲーム数ランダム加算。
- 約1050〜1200G+α: 設定変更後に実際に打つゲーム数ベースで到達し得る天井レンジ。
- 600G以内: 設定変更後AT当選時のねこ娘CHANCE獲得抽選優遇区間。
- 15〜30pt: 設定変更時の妖気ポイント天井で選択されやすい側として公開されている範囲。

## conflicts
- ベースは資料により約30.6G、30.62〜30.98G、約31G表記。定義差/丸め差の範囲としてcanonicalは約30.6〜31.0G/50枚とし、実質CONFLICT扱いはしない。
- 一部立ち回り記事に「設定変更後の天井短縮はない」との文言があるが、同記事内でも0〜150G内部加算を明記。固定専用天井への置換がないという意味と解釈し、主要解析と一致する `0〜150G内部加算による実質短縮` をcanonicalとする。
- 営業中の有利区間リセット時恩恵と朝一設定変更時恩恵を混同しない。

## missingFields
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- definitiveResetDetection: UNVERIFIED_AFTER_RESEARCH
- resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset600GCatChanceRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- powerCycleBehavior.preciseStageRestore: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2024-08-05 canonical既知群は4機: `スマスロ ゲゲゲの鬼太郎 覚醒 / L D4DJ Pachi-Slot Mix / Lワンパンマン / スマスロ トロピカーナ`。
- 本機は1/4処理。残り3機は次リレーで同日群のcanonical順序を維持して処理する。
- 4機完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## sources
取得日: 2026-09-14
- JFJ公式: https://www.fujimarukun.co.jp/products/l_gegege/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004371/
- HAZUSE: https://hazuse.com/hd/4s0089/
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/224060010
- パチビー 攻略/リセット: https://www.pachibee.jp/machines/kouryaku/224060010
- パチ&スロ必勝本 設定変更時: https://hisshobon.com/machineinfo/84179/
- パチ&スロ必勝本 狙いドコロ: https://hisshobon.com/machineinfo/84207/
- パチ&スロ必勝本 有利区間: https://hisshobon.com/machineinfo/84180/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/782/23116/
- なな徹 天井: https://nana-press.com/kaiseki/machine/782/23263/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/213846/
- パチナビ 天井・ゾーン: https://pachinavi.net/machines/smasloth-kitaro-kakusei/tenjo/
