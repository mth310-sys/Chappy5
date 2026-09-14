更新日: 2026-09-14

## 現在地点
- recordCount: **1679**
- latestRecordAdded: **L 真・一騎当千 — No.1679**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-10-07_l-shin-ikkitousen.md`
- chronologicalFrontier: **2024-10-07**
- schema: **resetBehavior v0.7**
- status: **2024-10-07_GROUP_OPEN_4_OF_AT_LEAST_5_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1678を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1678 `今日から俺は!! パチスロ編` の次の未処理機種として、No.1679 `L 真・一騎当千` を性能コア + resetBehavior v0.7で登録。
- Daiichi公式で機種存在を確認。HAZUSEで2024-10-07導入、型式 `Lパチスロ真・一騎当千V`、検定番号 `430303` を確認。
- 設定1〜6のAT初当たりは 1/321.3 / 1/310.8 / 1/291.6 / 1/245.7 / 1/232.3 / 1/222.1、機械割97.6 / 99.0 / 101.0 / 105.8 / 109.5 / 112.0%。一撃/なな徹の整数表示は丸め差として扱い、必勝本の小数値をcanonical。
- CZ初当たりは 1/154 / 1/148 / 1/138 / 1/115 / 1/110 / 1/105。ベース約31G/50枚、ボーナス純増約3.3枚/G。
- AT「一騎当千RUSH」は1セット30G+α、ボーナスループ継続率約70%over。当千BONUS約50枚、セブンラッシュ平均約300枚over。
- 通常AT間天井は最大1000G+α。モードA/B/C/D/天国の天井は1000/900/700/400/100G+α。
- 設定変更時は天井・内部状態・有利区間RESET、通常Dまたは天国へ移行し、最大400G+αへ短縮。規定ゲーム数は内部的にランダム減算。
- 公開朝一モード振り分けを取得: 設定1 D100%/天国0%、設定2・3 D98.4%/天国1.6%、設定4・5・6 D96.9%/天国3.1%。朝一天国なら設定2以上濃厚。
- なな徹の比較表で据え置き時は天井・内部状態・有利区間を引継ぎ。機種別電源OFF→ON比較資料では天井・内部モード・内部状態・有利区間を引継ぎ。
- 設定変更/電源OFF→ONとも南陽ステージ開始とする資料があり、ステージ単独では変更判別不可。朝一400G+α超でAT非当選は据え置き濃厚材料。
- 本機固有ガックン条件/発生率、設定変更時の規定Gランダム減算具体分布、設定変更直後の内部状態具体振り分けは、表記揺れ・型式・検定番号・設定変更/据え置き/電断/ガックン/有利区間等へ検索語を変更し、公式・業界・主要解析・旧DB系を横断後も固定できず `UNVERIFIED_AFTER_RESEARCH` / `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 2024-10-07境界の残候補 `トリプルクラウンフォーユー` を再監査。HAZUSE・パチビーは2024-10-07導入、型式 `SトリプルクラウンX2-30`、検定番号 `4S0038`、清龍ゲームジャパンで一致。一方、ぱちんこキュレーションは導入日を `2024-10-07（沖縄県）` と明記するため、全国一斉導入ではなく沖縄地域導入の可能性を保持。次回は地域先行/段階流通として本線採番するかを最終確定する。

## No.1679 — L 真・一騎当千
- path: `docs/real_machine_db/machines/2024-10-07_l-shin-ikkitousen.md`
- manufacturer: **Daiichi**
- formalModel: **Lパチスロ真・一騎当千V**
- inspectionCode: **430303**
- releaseDate: **2024-10-07**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス / ST型AT**
- payoutRate: **97.6 / 99.0 / 101.0 / 105.8 / 109.5 / 112.0%**
- AT initial: **1/321.3 / 1/310.8 / 1/291.6 / 1/245.7 / 1/232.3 / 1/222.1**
- CZ initial: **1/154 / 1/148 / 1/138 / 1/115 / 1/110 / 1/105**
- base: **約31G/50枚**
- netIncrease: **約3.3枚/G**
- normalCeiling: **最大1000G+α**
- resetCeiling: **最大400G+α / 通常D or 天国**
- settingChange: **天井・内部状態・有利区間RESET / モード再抽選 / 規定Gランダム減算**
- carryOver: **天井・内部状態・有利区間CARRY_OVER**
- powerCycle: **天井・内部モード・内部状態・有利区間CARRY_OVER**
- detection: **400G+α超AT非当選で据え置き濃厚材料 / ステージ単独不可 / ガックンUNVERIFIED**

## 2024-10-07境界 — OPEN
1. スマスロ 鬼武者3 — No.1676 DONE
2. スマスロ頭文字D 2nd — No.1677 DONE
3. 今日から俺は!! パチスロ編 — No.1678 DONE
4. L 真・一騎当千 — No.1679 DONE
5. トリプルクラウンフォーユー — NEXT CANDIDATE / HAZUSE・パチビー 2024-10-07 / `SトリプルクラウンX2-30` / `4S0038` / 清龍ゲームジャパン。ぱちんこキュレーションは `2024-10-07（沖縄県）` と明記するため、30φ地域先行/段階流通監査を完了してからcanonical採否・No.1680採番を決める。
- 同日群を閉じる前にメーカー別一覧・当時新台カレンダー・HAZUSE/P-WORLD等を再照合し、PB/地域先行/別型式/延期を監査。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。

## 次回再開地点
- 最新mainを再同期しNo.1679と本handoffを確認。
- **`トリプルクラウンフォーユー` の地域先行/段階導入監査を最優先**。2024-10-07を沖縄県導入日として独立canonicalレコードに採るか確定する。
- 採番する場合はNo.1680として性能コア + resetBehavior v0.7を収集。既確認値: `SトリプルクラウンX2-30` / `4S0038` / 清龍ゲームジャパン / 30φノーマル / 機械割96.84〜108.02% / BIG 1/287.44〜1/238.31 / REG 1/496.48〜1/309.13 / BIG最大252枚 / REG最大98枚 / 天井非搭載。
- 同日群完了後、次の全国導入日境界へ進む。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- Daiichi公式: https://daiichi777.jp/pachislot/slot_ikkitousen/
- HAZUSE L 真・一騎当千: https://hazuse.com/machine/pachislot/SX0086/
- HAZUSE詳細: https://hazuse.com/hd/430303-2/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84872/
- 一撃 機種トップ: https://1geki.jp/slot/l_shin_ikkitosen/
- 一撃 天井/朝一: https://1geki.jp/slot/l_shin_ikkitosen/3/
- 一撃 ベース: https://1geki.jp/slot/l_shin_ikkitosen/4/
- 一撃 ボーナス: https://1geki.jp/slot/l_shin_ikkitosen/91/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/815/24377/
- なな徹 モード: https://nana-press.com/kaiseki/machine/815/24380/
- なな徹 設定判別: https://nana-press.com/kaiseki/machine/815/24357/
- ちょんぼりすた: https://chonborista.com/slot/d-light/217808/
- ぽこすろっと 電源OFF→ON比較: https://www.nankaikoya.jp/shin-ikkitousen-kitaichi/
- HAZUSE トリプルクラウンフォーユー: https://hazuse.com/machine/pachislot/4S0038/
- パチビー トリプルクラウンフォーユー: https://www.pachibee.jp/machines/index/224090005
- ぱちんこキュレーション トリプルクラウンフォーユー: https://pachinko-curation.com/50856/
