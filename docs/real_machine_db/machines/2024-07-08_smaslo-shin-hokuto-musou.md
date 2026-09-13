# スマスロ真・北斗無双

recordNo: 1657
machineName: スマスロ真・北斗無双
aliases: スマスロ真北斗無双 / 真・北斗無双 / Lスマスロ真北斗無双
manufacturer: ロデオ（Sammy）
formalModel: L スマスロ真北斗無双 FS
inspectionCode: 3S1512
releaseDate: 2024-07-08
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス + ST型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 必勝本機種ページは2024-07-08導入と明記。
- HAZUSE・P-WORLD系検定資料・複数機種DBでも2024-07-08で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 2024-03-18付の検定通過報道で型式 `L スマスロ真北斗無双 FS`、ロデオを確認。
- HAZUSEで検定番号 `3S1512`、型式 `L スマスロ真北斗無双 FS`、ロデオ（Sammy）を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 101.8%
- setting4: 106.6%
- setting5: 110.5%
- setting6: 114.9%
initialHitBySetting:
- bonusInitial:
  - setting1: 1/381.1
  - setting2: 1/379.1
  - setting3: 1/361.6
  - setting4: 1/349.3
  - setting5: 1/338.6
  - setting6: 1/320.5
baseGamesPer50: 約31.0G/50枚（設定1）
netIncrease:
- 疑似ボーナス: 約5.0枚/G
basicPayout:
- 幻闘BONUS: 約100枚
- 真・北斗無双BONUS: 約300枚
- 七星チャージ: 50～500枚
- 初当りボーナス後はST「幻闘RUSH」へ突入
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は「宿命（カルマ）」を獲得し、規定宿命到達で初当りを目指す。
- 通常時の最大天井は1536宿命（平均約768G）+α。
- 設定変更後はモードC以上濃厚となり、最大1024宿命（平均約512G）+αへ短縮。
- 有利区間移行時およびST終了時にはブルーセブンモード移行抽選が存在する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井までの宿命数を再抽選。
- 内部モードを再抽選し、モードC以上濃厚。
- 内部状態を再抽選。
- 無双目高確率をリセット。
- 伝承奥義カウンタ・北斗無双カウンタをリセット。
- ユリアポイントを再抽選し、初期ポイント抽選を行う。
- 設定変更後の有利区間移行時は宿命数・伝承奥義カウンタ・北斗無双カウンタにランダム加算が行われる場合がある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 内部状態・モード・宿命数・伝承奥義カウンタ・北斗無双カウンタをCARRY_OVER。
- なな徹の設定変更/据え置き比較表で直接確認。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### powerCycleBehavior
- 純電源OFF→ONでは天井までの宿命をCARRY_OVER。
- モード・内部状態・無双目高確率・ユリアポイントはCARRY_OVER。
- 伝承奥義カウンタ・北斗無双カウンタ・幻闘PTメーターは表示上リセットされるが、内部値はCARRY_OVER。
- 有利区間については機種固有比較資料でも電源OFF→ON時は引継ぎとして扱われる。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### gameCounterReset
- 設定変更: 宿命数RESET / 再抽選。
- 据え置き: 宿命数CARRY_OVER。
- 純電源OFF→ON: 天井までの宿命CARRY_OVER。
- 電源OFF→ON時は一部カウンタ表示のみリセットされ、内部値は引き継ぐため、表示だけで据え置き/変更を断定しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常時最大天井: 1536宿命（平均約768G）+α。
- 設定変更時: モードC以上濃厚のため最大1024宿命（平均約512G）+αへ短縮。
- 到達時: ボーナス当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: RESET / 再抽選、モードC以上濃厚。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更を含む有利区間移行時にはブルーセブンモード抽選を実施。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態を再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 無双目高確率も設定変更時RESET、電源OFF→ON時CARRY_OVER。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更以外ではエンディング終了時、究極無双契機のスペシャルムービー終了後にも有利区間リセットが行われる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- モードC以上濃厚となり、通常最大1536宿命から最大1024宿命へ天井短縮。
- 設定変更後の数ゲーム間のみ「激アツ目」が成立する可能性があり、成立時はユリアボーナス直撃。
- ユリアポイントは初期ポイント抽選を実施。
- 有利区間移行時はブルーセブンモード移行抽選を実施。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日のモード・状態・宿命進行・各種内部カウンタ・ユリアポイントは設定変更で失われる/再抽選されるため、前日状況によっては据え置きより不利になり得る。
- 一方でモードC以上・天井短縮・朝一専用激アツ目の可能性があるため、一律の朝一不利とは扱わない。
- 固定的なリセット損失率/期待値は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_FOR_FIXED_PENALTY_VALUE

### resetDetection
- 設定変更後は宿命数・伝承奥義カウンタ・北斗無双カウンタへランダム加算される場合があり、朝一の数値ズレだけで変更/据え置きを見抜くことは難しい。
- 純電源OFF→ONでも伝承奥義カウンタ・北斗無双カウンタ・幻闘PTメーターは表示上リセットされる一方、内部値を引き継ぐため、表示初期化だけでは設定変更確定にならない。
- なな徹のリセット判別は「現在調査中」。
- 本機固有のリールガックン条件/発生率は、機種名・型式・ロデオ/Sammy・朝一/設定変更/リセット/据え置き/電源OFF ON/ガックンへ検索語を変え、主要解析・業界・旧DB系を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 通常時最大天井: 1536宿命（平均約768G）+α。
- 設定変更時最大天井: 1024宿命（平均約512G）+α。
- 有利区間移行時 / ST終了時のブルーセブンモード移行率:
  - setting1: 0.7%
  - setting2: 0.7%
  - setting3: 0.8%
  - setting4: 1.0%
  - setting5: 1.1%
  - setting6: 1.2%
- 有利区間移行時のレア小役によるブルーセブンモード追加当選率:
  - 無双目 / チャンスベル: 10.2%
  - チェリー / スイカ: 20.3%
  - チャンス目: 33.6%
- ユリアポイント初期振り分けの具体的数値: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- メーカー表記は市場上「Sammy」とされる資料が多いが、正式型式の検定通過メーカーはロデオ。DBでは `manufacturer: ロデオ（Sammy）` としてブランド表記と型式主体を併記。
- 有利区間移行時/ ST終了時ブルーセブンモード移行率は後日解析公開値。設定変更は有利区間移行契機に含まれるが、レア役追加抽選を含む最終朝一実効率とは分けて記録する。

## missingFields
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- ユリアポイント初期振り分け具体値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 固定的なリセット損失率/期待値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### official / industry
- Sammy公式 スマスロ真・北斗無双: https://www.sammy.co.jp/japanese/product/pachislot/sp_hok_mu/
- P-WORLD / GreenBelt 検定通過報道: https://news.p-world.co.jp/articles/27224/greenbelt

### core / model
- HAZUSE スマスロ真・北斗無双: https://hazuse.com/machine/pachislot/3S1512/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2623/2
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/214/kh01.php
- K-Navi: https://p-kn.com/slot/4145/

### reset / morning
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/770/22515/
- なな徹 有利区間リセット: https://nana-press.com/kaiseki/machine/770/22516/
- なな徹 ブルーセブンモード: https://nana-press.com/kaiseki/machine/770/23105/
- パチ＆スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83769/
- HAZUSE ブルーセブンモード: https://hazuse.com/machine/pachislot/3S1512/genre/209/
