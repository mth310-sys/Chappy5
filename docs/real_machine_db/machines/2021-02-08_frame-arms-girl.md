# パチスロ フレームアームズ・ガール

No: 1391
machineName: パチスロ フレームアームズ・ガール
machineNameVariants: パチスロ フレームアームズ・ガール / フレームアームズ・ガール / SフレームアームズガールNC
manufacturer: ネット
releaseDate: 2021-02-08
formalModelName: SフレームアームズガールNC
certificationNumber: 0S1140

generation: 6.1号機
systemType: AT / 周期抽選 / CZ + 擬似ボーナス経由バトルAT

## identity / release
- ネット公式プレスリリースで2021年2月上旬導入予定、K-Navi・パチビー・HAZUSEでホール導入開始2021-02-08が一致。
- HAZUSEで型式 `SフレームアームズガールNC`、検定番号 `0S1140` を確認。
- reliability: OFFICIAL / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.0% |
| 2 | 98.9% |
| 3 | 101.4% |
| 4 | 105.9% |
| 5 | 110.0% |
| 6 | 114.9% |
- K-Naviの設定別値、HAZUSEの98.0〜114.9%レンジ、メーカー発表の設定6 114.9%を照合。
- reliability: OFFICIAL / ANALYSIS_HIGH

## initialHitBySetting
通常時の主要比較値として擬似ボーナス「セッションチャンス（SC）」とメインAT「FAガールバトル」を併記する。

| 設定 | SC初当たり | FAガールバトル初当たり |
|---:|---:|---:|
| 1 | 1/258 | 1/741 |
| 2 | 1/266 | 1/634 |
| 3 | 1/242 | 1/629 |
| 4 | 1/248 | 1/471 |
| 5 | 1/231 | 1/495 |
| 6 | 1/221 | 1/373 |
- K-Navi掲載値。高設定ほど単純単調ではないため数値をそのまま保持する。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50.1〜51.0G/50枚（設定差を含むレンジとして掲載する解析資料あり）。
- K-Naviは設定1〜6を約50.1Gとして掲載しており、定義/丸め差があるため `BASE_SCOPE_DIFFERENCE_50.1_FIXED_VS_50.1_TO_51.0_RANGE` として注記し平均化しない。
- reliability: ANALYSIS_HIGH / CONFLICT_SCOPE

## netIncrease
- AT/擬似ボーナス中: 約2.6枚/G。
- パチビー、HAZUSE、複数解析で一致。
- reliability: ANALYSIS_HIGH

## basicPayout
- セッションチャンス: 20Gの擬似ボーナス。消化中にメインAT突入を抽選。
- FAガールバトル: バトル継続型AT。1バトルは30G保障、45G経過時は勝利濃厚とする解析あり。
- 固定枚数型ATではないため、比較可能な「1回固定獲得枚数」は設定しない。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は周期管理。1周期はキャラ決定からFAガールチャレンジまで平均約83G（解析値）。
- 有利区間移行後、最大7周期到達でSC以上。おおむね約650〜651Gが最深到達目安。
- CZ全体成功期待度は設定1約36.4%〜設定6約43.2%（パチビー解析）。
- 有利区間モードは有利1〜6。上位ほど周期天井やSC当選時AT抽選が優遇。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_ADVANTAGEOUS_MODE_TABLE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井進行RESET、内部状態RESET。
- 有利区間を新規開始し、有利区間移行時に有利区間モードを再抽選する。
- 液晶は温泉待機画面から開始。
- 1geki、ちょんぼりすたの設定変更比較表で一致。

### carryOverBehavior
- 据え置き時は設定変更を伴わないため、天井進行・内部状態・有利区間進行は継続側として扱う。
- 朝一有利区間ランプ点灯は据え置き濃厚とされる。
- 前日消灯状態や店側対策等の例外はあり得るため、ランプ単独を絶対判定にはしない。

### powerCycleBehavior
- 純電源OFF→ONでは天井進行を引き継ぐ。
- 内部状態も引き継ぐ。
- 電源ON後の液晶開始ステージは高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 1gekiとちょんぼりすたの直接比較表が一致。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常最深は有利区間移行後7周期到達、約650〜651G目安でSC以上。
- 設定変更専用の固定短縮天井は確認できない。
- 有利区間モードにより周期天井が変化するが、これは設定変更専用短縮値ではなく新規有利区間共通仕様。

### modeAfterReset
- 設定変更後は新規有利区間移行に伴い有利1〜6を再抽選。
- 有利区間移行時の成立役と設定に応じて決定する。
- 設定変更専用の別テーブルではなく、有利区間移行時共通の公開値として分離保存する。

通常成立役（押し順1枚・レア小役以外）時の公開モード振り分け:

| 設定 | 有利1 | 有利2 | 有利3 | 有利4 | 有利5 | 有利6 |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 43.0% | 31.2% | 2.3% | 8.6% | 8.6% | 6.3% |
| 2 | 21.8% | 35.2% | 3.1% | 32.0% | 1.6% | 6.3% |
| 3 | 30.5% | 12.5% | 17.2% | 12.5% | 17.2% | 10.1% |
| 4 | 12.5% | 11.7% | 7.0% | 38.3% | 7.8% | 22.7% |
| 5 | 16.4% | 14.8% | 8.6% | 12.5% | 22.7% | 25.0% |
| 6 | 3.9% | 3.9% | 9.4% | 22.7% | 18.0% | 42.1% |

- 設定6は有利6が42.1%と高い。
- 押し順1枚役・レア役成立時には別振り分けが公開されているが、実機完全再現用の全テーブルは本DB対象外のため必要最小限のみ保持する。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更後の液晶は温泉待機画面。
- 温泉ステージはランナーポイント高確率状態だが、設定変更専用の滞在率/保障G数テーブルとして独立した公開値は確認していない。

### advantageousSectionReset
- 設定変更: RESET / 新規有利区間へ移行。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常時は有利区間ランプ点灯型。

### resetBenefits
- 新規有利区間移行により有利区間モードを再抽選する。
- 設定変更後は温泉待機画面から開始する。
- 特定の短縮天井・AT直撃保証・リセット専用当選率は確認できない。
- 有利区間モード振り分けは設定変更専用恩恵ではなく、有利区間移行時共通仕様。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認できない。

### resetDetection
- 有利区間ランプはPAY OUT右下ドット。
- 通常時に点灯する機種のため、朝一消灯は設定変更濃厚、点灯は据え置き濃厚。
- 前日が非有利区間で終了したケースや店側対策などの例外を考慮し、確定判別とはしない。
- 本機固有のガックン条件/発生率は資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常最深天井: 7周期 / 約650〜651G目安。
- 設定変更時短縮天井: NONE_CONFIRMED。
- 有利区間移行時通常成立役モード振り分け: 上表。
- 設定6の有利6: 42.1%。
- 設定変更専用の固定当選率/恩恵発生率: NONE_CONFIRMED。

## sources
取得日: 2026-09-12

1. ネット株式会社 プレスリリース「パチスロ フレームアームズ・ガール」発売決定
   - https://www.dreamnews.jp/press/0000226315
   - 2021年2月上旬導入予定、設定6出玉率114.9%、ゲーム性概要を確認。
   - reliability: OFFICIAL

2. HAZUSE「パチスロ フレームアームズ・ガール」
   - https://hazuse.com/machine/pachislot/0S1140/genre/209/
   - 型式SフレームアームズガールNC、検定番号0S1140、導入2021-02-08、純増約2.6枚、出玉率レンジ、有利区間モード振り分けを確認。
   - reliability: ANALYSIS_HIGH

3. K-Navi「パチスロ フレームアームズ・ガール」
   - https://p-kn.com/slot/3516/
   - 導入日、設定別SC/AT初当たり、合算、機械割、約50.1G/50枚を確認。
   - reliability: ANALYSIS_HIGH

4. パチビー「パチスロ フレームアームズ・ガール」
   - https://www.pachibee.jp/machines/kouryaku/220120004
   - 2021-02-08導入、6.1号機AT、純増約2.6枚/G、周期平均約83G、CZ成功期待度等を確認。
   - reliability: ANALYSIS_HIGH

5. 1geki「天井&設定変更」
   - https://1geki.jp/slot/s_fagirl/3/
   - 最大7周期/約651G、設定変更時の天井・状態RESET、温泉待機、電源OFF→ON時の天井・状態引継ぎを確認。
   - reliability: ANALYSIS_HIGH

6. ちょんぼりすた「フレームアームズ・ガール」
   - https://chonborista.com/slot/net-slot/125339/
   - 約50.1〜51.0G/50枚、天井7周期約650G、設定変更/電断比較、有利区間ランプによる朝一判別を別系統で照合。
   - reliability: ANALYSIS_HIGH

7. なな徹「フレームアームズ・ガール 有利区間モード」
   - https://nana-press.com/kaiseki/machine/102/3268/
   - 有利区間移行時の成立役・設定別モード抽選を照合。
   - reliability: ANALYSIS_HIGH

## missingFields
- 電源OFF→ON後の液晶開始ステージ。
- 本機固有ガックン条件/発生率。

## conflicts
- 50枚ベースはK-Naviの全設定約50.1G表記と、別解析の約50.1〜51.0Gレンジ表記にスコープ差あり。平均化せず `BASE_SCOPE_DIFFERENCE_50.1_FIXED_VS_50.1_TO_51.0_RANGE` として保持。
