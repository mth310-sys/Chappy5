# パチスロ 対魔導学園35試験小隊

No: 1368
machineName: パチスロ 対魔導学園35試験小隊
machineNameVariants: 対魔導学園35試験小隊 / S対魔導学園35試験小隊H1
manufacturer: 平和 / オリンピア
releaseDate: 2020-09-23
formalModelName: S対魔導学園35試験小隊H1
certificationNumber: 9S1900

generation: 6号機
systemType: AT / ゲーム数上乗せ型AT / CZ経由+直撃 / 有利区間管理

## identity / release
- HAZUSEで型式 `S対魔導学園35試験小隊H1`、検定番号 `9S1900`、メーカー平和、導入開始日2020-09-23を確認。
- 必勝本、複数当時解析でも2020-09-23導入で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.3% |
| 2 | 99.0% |
| 3 | 101.1% |
| 4 | 105.1% |
| 5 | 107.9% |
| 6 | 110.2% |
- HAZUSE、1geki、複数解析で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT「魔女狩り戦争」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/588.2 |
| 2 | 1/494.4 |
| 3 | 1/450.9 |
| 4 | 1/360.8 |
| 5 | 1/324.5 |
| 6 | 1/292.7 |
- HAZUSE、1geki、必勝本、複数解析で一致。
- 補助値としてCZ初当たりは設定1 1/263.3 ～ 設定6 1/112.5の解析値あり。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- HAZUSE: 設定1 約42.5G/50枚。
- 別資料では約39.9G/50枚表記があるため、定義/算出差の可能性を残し平均化しない。
- canonical yardstick value: **約42.5G/50枚（HAZUSE設定1）**。
- conflicts: `BASE_CONFLICT_42.5G_VS_39.9G`。
- reliability: ANALYSIS_HIGH / CONFLICT

## netIncrease
- AT「魔女狩り戦争」純増 約2.2枚/G。
- パチマガスロマガ、なな徹、1geki、P-WORLD等で一致。
- reliability: ANALYSIS_HIGH

## basicPayout
- ATはゲーム数上乗せ型。
- AT開始時は特化ゾーン「Embrace RUSH（エンブレイスラッシュ）」で初期ゲーム数を決定。
- 必勝本ではエンブレイスラッシュの平均上乗せ100G以上と説明。
- AT中はCZ/バトル経由でヒロイン獲得・再上乗せを目指す。
- エンディングはAT獲得2000枚到達で発生し、50G消化後に有利区間リセット。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はテンションカウンターを点灯させCZ「小隊夢（ショータイム）」を目指し、CZ成功等からATへ。
- 天井は有利区間移行後、通常時最大555G（523G+前兆32G）。ただし天井直前に「いつどこゾーン」へ突入した場合は最大35G先送りの可能性あり。
- 内部モードは通常 / 優遇 / 引き戻し / フリーズ。
- モード別天井振り分けは111G / 333G / 560Gで、通常・引き戻しは333G 0.4%、560G 99.6%、優遇は111G 0.4%、333G 1.2%、560G 98.4%。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は有利区間RESET→非有利区間。
- 天井ゲーム数RESET。
- 内部モードRESET/再抽選。
- 内部状態RESET/再抽選。
- 液晶では非有利区間中にテンションカウンターへ黄色いテープ表示が出る。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は、設定変更を伴わない電源OFF→ONと同様に、有利区間・天井進行・内部モード・内部状態をCARRY_OVERする扱い。
- 前日が有利区間中で閉店し対策がなければ、朝一有利区間ランプ点灯が据え置き濃厚材料になる。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- HAZUSEの設定変更&電源ON/OFF比較表で、純電源OFF→ONは有利区間・液晶画面・内部モード・内部状態を引き継ぐ。
- 天井進行も有利区間/モード継続に伴いCARRY_OVERとして扱う。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井G RESET。
- 据え置き / 純電源OFF→ON: 天井G CARRY_OVER。

### ceilingAfterReset
- 設定変更後は新たな有利区間開始後に通常モード抽選を行い、モード別天井抽選が適用される。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 最大天井は通常時555G（523G+前兆32G、特殊ゾーン介入時は最大35G先送り可能）。

### modeAfterReset
- 設定変更: 内部モードRESET→非有利区間から有利区間移行時に再抽選。
- 据え置き / 純電源OFF→ON: 内部モードCARRY_OVER。
- 公開されている有利区間開始時モード振り分けは、レア小役以外で通常78.9% / 優遇19.9% / 引き戻し0.8% / フリーズ0.4%。レア小役成立時は優遇83.2% / 引き戻し15.6% / フリーズ1.2%。
- これは設定変更専用表ではなく、有利区間開始時共通値として保存。

### stateAfterReset
- 設定変更: 内部状態RESET→有利区間開始時にモードに応じて再抽選。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 有利区間開始時、通常/引き戻しモードなら通常87.5% / 高確11.7% / 超高確0.8%。優遇モードなら高確88.3% / 超高確11.7%。
- reliability: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: RESET→非有利区間。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常時は有利区間ランプ点灯型として攻略資料で扱われ、朝一点灯は据え置き濃厚、消灯は設定変更濃厚。ただし前日消灯閉店や店側対策を除く。

### resetBenefits
- 設定変更そのものに固定短縮天井・AT直撃保証などの専用恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更後は非有利区間から再度有利区間開始抽選を受けるため、成立役次第で優遇/引き戻し/フリーズモードへ移行する可能性がある。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置きなら維持される天井進行・内部モード/状態を設定変更で消去する点はあるが、設定変更固有の定量的不利として公開された値は確認できない。

### resetDetection
- 朝一有利区間ランプ点灯: 据え置き濃厚。消灯: 設定変更濃厚。ただし前日状況・店側対策の例外あり。
- 非有利区間滞在時は液晶下のテンションカウンターに黄色いテープ表示が出るため、未対策なら朝一画面でもリセット推測可能。
- 液晶画面自体は電源OFF→ONでは引き継ぐ。
- 本機固有のガックン条件/発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
有利区間開始時モード振り分け:
- レア小役以外: 通常78.9% / 優遇19.9% / 引き戻し0.8% / フリーズ0.4%。
- レア小役: 優遇83.2% / 引き戻し15.6% / フリーズ1.2%。

モード別天井ゲーム数:
- 通常/引き戻し: 333G 0.4% / 560G 99.6%。
- 優遇: 111G 0.4% / 333G 1.2% / 560G 98.4%。

有利区間開始時の内部状態:
- 通常/引き戻しモード: 通常87.5% / 高確11.7% / 超高確0.8%。
- 優遇モード: 高確88.3% / 超高確11.7%。

## resetBehavior 再探索メモ
2026-09-11。`対魔導学園35試験小隊 / S対魔導学園35試験小隊H1 / 9S1900 / 平和 / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ / テープ表示` を組み替え、HAZUSE、1geki、パチマガスロマガ、なな徹、ちょんぼりすた、必勝本、旧攻略記事を横断。設定変更と純電断の有利区間・モード・状態差、朝一表示、有利区間開始時の公開数値まで固定。本機固有ガックンは固定できず推測補完しない。

## conflicts
- baseGamesPer50: HAZUSEは設定1約42.5G/50枚、別攻略/導入資料では約39.9G/50枚。平均化せず `BASE_CONFLICT_42.5G_VS_39.9G` として保持。
- releaseDate: 一部事前資料に2020-09-22予定表記があるが、HAZUSE・必勝本・複数実導入資料は2020-09-23で一致。本DBでは実導入日2020-09-23をcanonicalとする。

## sources
取得日: 2026-09-11

1. HAZUSE 基本/天井・設定変更
   - https://hazuse.com/machine/pachislot/9S1900/genre/201/
   - https://hazuse.com/machine/pachislot/9S1900/genre/207/
   - 型式・検定番号・導入日・出玉率・AT初当たり・設定1ベース、天井、設定変更/電断比較、朝一判別を確認。
   - reliability: ANALYSIS_HIGH
2. 1geki 機種概要
   - https://1geki.jp/slot/s_35s/
   - AT初当たり・出玉率・純増を照合。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ AT/内部状態
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/44/at02-1.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/44/tj08.php
   - AT純増・エンディング、有利区間開始時状態振り分けを確認。
   - reliability: ANALYSIS_HIGH
4. なな徹 通常時モード
   - https://nana-press.com/kaiseki/machine/84/1824/
   - 有利区間開始時モード振り分けとモード別天井G振り分けを確認。
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本 基本スペック
   - https://p.hisshobon.jp/machine/3544/1/78656
   - 2020-09-23導入、純増、エンブレイスラッシュ平均上乗せ100G以上を確認。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと 朝一/有利区間ランプ
   - https://www.slopachi-quest.com/article/taimadougakuen-tenjou/
   - 朝一ランプ判別とテープ表示の実戦上の扱いを補助確認。
   - reliability: ANALYSIS_SINGLE

## missingFields
- 本機固有のガックン条件/発生率。
- 設定変更専用と断定できる追加の朝一AT/CZ直撃率。

qaStatus: VERIFIED_2026-09-11
