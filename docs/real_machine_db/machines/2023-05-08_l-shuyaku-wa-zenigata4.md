# L主役は銭形4

recordNo: 1560
machineName: L主役は銭形4
manufacturer: オリンピア（平和グループ）
formalModel: L主役は銭形4L1
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2023-05-08
generation: 6.5号機 / スマスロ
systemType: AT / ゲーム数上乗せ型
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 98.2%
- 設定2: 98.7%
- 設定3: 100.7%
- 設定4: 104.3%
- 設定5: 109.5%
- 設定6: 114.1%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「逮捕RUSH」初当たり
- 設定1: 1/367.9
- 設定2: 1/365.3
- 設定3: 1/348.3
- 設定4: 1/329.0
- 設定5: 1/314.5
- 設定6: 1/305.8

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.0G/50枚（設定1代表値）

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「逮捕RUSH」: 約2.7枚/G

信頼度: OFFICIAL/INDUSTRY + ANALYSIS_HIGH

## basicPayout
- AT「逮捕RUSH」: 初期50G+αのゲーム数上乗せ型AT。
- 「デカチャンス」: 8G固定のCZ/上乗せ契機。デカ目高確率状態。
- 「BIG GAME」: 自力継続10G + ループ継続3Gの計13Gを1セットとする上乗せ特化ゾーン。突入時の上乗せ平均100G OVERと業界発表。
- 「超逮捕RUSH」: 超上乗せ特化ゾーン。業界発表時の期待値2,000枚OVER。

## modeSpecificMinimumData
- 通常時はガッツを毎ゲーム加算し、規定ガッツ到達を中心にATを目指す。
- 通常時ゲーム数天井: 999G消化でAT当選。
- 通常時ガッツ最大天井: 1399ガッツ。
- モード別ガッツ天井: 通常A/B 1399、通常C 899、通常D 699、通常E 499、通常F 299、天国A 199、天国B/超天国 99ガッツ。
- 設定変更時はガッツ天井が最大899ガッツへ短縮。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS_AND_POWER_CYCLE_GAP
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。ガッツ天井は最大899ガッツへ短縮。
- 内部状態RESET・再抽選。
- 通常時モードRESET・再抽選。
- 執念ポイントを再抽選。
- ガッツカウンター表示は「？？？」。
- 朝一ステージは市街地。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井CARRY_OVER。
- 内部状態CARRY_OVER。
- モードCARRY_OVER。
- 執念ポイントCARRY_OVER。
- ガッツカウンターの見た目は設定変更時と同様「？？？」表示。
- 朝一ステージも市街地のため、外観だけでは設定変更と区別できない。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の、天井・ガッツ内部値・モード・内部状態・執念ポイント・有利区間の個別CARRY_OVER/RESETを本機固有の直接資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更/据え置き比較資料は複数確認したが、純電断を独立列で明示する資料は十分な再探索後も未確認。推測転記しない。

### gameCounterReset
- 設定変更: RESET。通常時実ゲーム数天井は999G、ガッツ天井は最大899ガッツへ短縮。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 設定変更時はガッツ天井が通常最大1399ガッツから最大899ガッツへ500ガッツ短縮。
- 実ゲーム数天井999Gについて、設定変更専用のさらに短い固定G数は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更時（有利区間移行時）に通常時モードを再抽選。
- モード移行率の詳細は高信頼解析でも「調査中」で、十分な再探索後も公開振り分けを固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きはモードCARRY_OVER。
- 純電源OFF→ONは `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時は内部状態を再抽選し、通常50% / 高確50%。
- 据え置きは内部状態CARRY_OVER。
- 朝一の見た目は市街地でも内部的に高確の可能性がある。
- 純電源OFF→ONは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- エンディング到達後のエクストラボーナス終了時にも有利区間をリセットし、その後30G連へ移行するが、これは朝一設定変更とは別契約。

### resetBenefits
- ガッツ天井が最大899ガッツへ短縮（通常最大1399から500短縮）。
- 初期執念ポイントが優遇され、約60%で50pt以上所持から開始。
- 内部状態は50%で高確スタート。
- 設定変更時の有利区間移行に伴い通常時モードを再抽選するが、詳細振り分けは非公開/未固定。

### resetPenalties
- 据え置きなら保持される前日天井進行・モード・内部状態・執念ポイントを設定変更で失う。
- 設定変更専用の追加ペナルティ数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一のガッツカウンターは設定変更/据え置きとも「？？？」表示。
- 朝一ステージも設定変更/据え置きとも市街地で、見た目だけでは判別不可。
- 据え置き時は内部ガッツ/規定ゾーンを引き継ぐため、50/150/250/350…等の規定ガッツゾーンのズレは据え置き可能性UP材料。
- 有利区間ランプによる判別は不可。
- 本機固有のリールガックン条件・発生率は、機種名/型式名/メーカー名と「設定変更・リセット・朝一・ガックン」を組み替えて再探索しても直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
#### 設定変更時の初期執念ポイント割合
- 49pt以下: 39.8%
- 50pt: 25.0%
- 55pt: 0.4%
- 60pt: 4.7%
- 65pt: 7.4%
- 70pt: 9.8%
- 75pt: 0.4%
- 80pt: 9.8%
- 85pt: 0.4%
- 90pt: 2.3%
- 合計で50pt以上所持: 約60.2%

#### 設定変更時の内部状態
- 通常: 50%
- 高確: 50%

#### ガッツ天井
- 通常最大: 1399ガッツ
- 設定変更後最大: 899ガッツ
- 短縮幅: 500ガッツ

### publicMorningNumbers
- 設定変更後ガッツ天井: 最大899ガッツ。
- 初期執念ポイント50pt以上: 約60.2%。
- 初期内部高確: 50%。
- 通常時モードの設定変更時振り分け: `UNVERIFIED_AFTER_RESEARCH`（高信頼解析でも詳細調査中）。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `L主役は銭形4 / 主役は銭形4 / L主役は銭形4L1 / オリンピア / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / ガッツ / モード / 状態 / 執念ポイント / ガックン / 有利区間 / 判別` を組み替えて検索。
- 平和公式導線、遊技日本/P-WORLD、グリーンべると/P-WORLD、必勝本、なな徹、K-Navi、すろぱちくえすと、後年解析DBを横断。
- 検定番号は `L主役は銭形4L1 / 2S / 検定 / 公安委員会 / 検定番号` を組み替えて再探索したが、今回固定できる公的/高信頼資料に到達できず推測しない。

## conflicts
- 2023-05-08の導入一覧記事に `L戦国BASARAギガZE` が同日導入のように掲載される資料があるが、ユニバーサル側は2023-05-09時点で「5/8に発売発表、ホール導入は8月予定」とし、K-Naviおよびグリーンべるとの実導入記事は2023-08-07で一致。したがってBASARAは5/8実導入群に含めず、境界資料の `CONFLICT_RELEASE_ANNOUNCEMENT_VS_ACTUAL_INSTALLATION` として保持。

## missingFields
- inspectionCode: `UNVERIFIED_AFTER_RESEARCH`
- pure power OFF→ON individual reset/carry-over behavior: `UNVERIFIED_AFTER_RESEARCH`
- setting-change normal-mode distribution: `UNVERIFIED_AFTER_RESEARCH`
- machine-specific reel-gakkun condition/rate: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-13

- 平和製品情報導線 / 遊技日本・P-WORLD: https://news.p-world.co.jp/articles/23192/nippon
  - 製造元オリンピア、型式 `L主役は銭形4L1`、純増2.7枚/G、平和グループスマスロ第2弾。
- 遊技日本・P-WORLD 販売発表: https://news.p-world.co.jp/articles/23259/nippon
  - 設定別AT初当たり/出玉率、型式、基本ゲーム性。
- グリーンべると・P-WORLD: https://news.p-world.co.jp/articles/23369/greenbelt
  - 2023-05-08導入予定、AT初期50G+α、純増2.7枚/G、BIG GAME/超逮捕RUSH概要。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4076/1/94084
  - 設定別AT初当たり、機械割、2023-05-08導入。
- パチ＆スロ必勝本 スペック: https://p.hisshobon.jp/vpage/2529/2
  - 50枚あたり32.0G（設定1）、純増2.7枚/G。
- なな徹 AT確率/機械割: https://nana-press.com/kaiseki/machine/531/14421/
  - 設定別AT初当たり、機械割。
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/531/14824/
  - 設定変更/据え置きの有利区間・天井・状態・モード、899ガッツ短縮、初期執念pt、内部状態50/50、判別、有利区間ランプ。
- なな徹 天井: https://nana-press.com/kaiseki/machine/531/14822/
  - 通常時999G天井。
- なな徹 モード: https://nana-press.com/kaiseki/machine/531/14917/
  - モード別ガッツ天井。
- K-Navi: https://p-kn.com/slot/3938/
  - 実導入開始2023-05-08、基本AT仕様。
- すろぱちくえすと: https://www.slopachi-quest.com/article/syuyakuhazenigata4-settei/
  - 導入日、設定別スペック、約32G/50枚。
- 2023-05-08新台スケジュール（境界CONFLICT）: https://news.p-world.co.jp/articles/23998/greenbelt
- ユニバーサル「戦国BASARA GIGA」発売発表/8月導入予定: https://www.fieldservice.store/business-topics/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%80%81%E3%80%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD-%E6%88%A6%E5%9B%BDbasara-giga%E3%80%8D%EF%BD%90%EF%BD%96%E3%83%BB%E8%A9%A6%E6%89%93
- K-Navi 戦国BASARA GIGA: https://p-kn.com/slot/3965/
  - 実導入開始2023-08-07。
- グリーンべると 8/7実導入記事: https://web-greenbelt.jp/post-75158/
  - ホール導入2023-08-07。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS_AND_POWER_CYCLE_GAP
