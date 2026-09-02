# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **342件地点 / スペシャルオアシス（具体日キュー2009-02-02）まで接続済み**。
- 2009-02-02同日群〜2月前半を `導入 / 納品 / 発売 / 新台 / 型式 / メーカー` の具体日で再監査。発表会・内覧会日と実納品/ホール導入日を分離した。
- ニューギン `バトルアスリーテス大運動会` は当時グリーンべるとで **2009-03-01納品開始予定**、オーイズミ `ダッシュ勝平` はパチビーで **2009-02-24導入**、銀座 `宇宙刑事ギャバン` は当時グリーンべるとで **2009-02-22納品開始予定**、メーシー `スーパーリアル麻雀` はパチビーで **2009-02-24導入**を確認。いずれも2月前半へ誤挿入しない。
- `Wキャッツ` は2009年2月導入開始までは確認できるが、具体日を今回確定できないため推測で343より前へ置かない。後続で具体日が判明した場合は正しい位置へ遡及挿入する。
- IGTジャパン **`エアマスター`** は当時グリーンべるとで **最速2009-02-15から納品開始予定**を直接確認。既存未収録を確認し、**343件目**として追加。
- **既存343件の再追加禁止。**

## 343. エアマスター

record:
- `docs/real_machine_db/machines/2009-02-15_air-master.md`

要点:
- machineName: **エアマスター**
- manufacturer: **IGTジャパン**
- releaseDate: **2009-02-15（最速納品開始予定・当時業界資料）**
- generation: **5号機**
- systemType: **ボーナス非搭載 / AT+RT+ART / ARTメイン**
- settings: **1 / 3 / 5 / F**
- 機械割: **97.6 / 100.7 / 105.3 / 110.1%**。P-WORLD、5号機クロニクル、回顧スペック資料で一致。
- ART初当たり: **1/379 / 1/351 / 1/293 / 1/249**。別系統の同一4値本文を今回確定できないため `ANALYSIS_SINGLE_WITH_SYSTEM_CROSSCHECK` として保存。
- 50枚ベース: **45.03 / 44.96 / 45.00 / 45.01G**（K-Navi）。
- RT `バトルロワイヤル`: **30G固定・約+0.6枚/G**。
- ART `スーパーバトルロワイヤル`: **30G固定・約+2.1枚/G**、継続率 **65 / 75 / 85 / 90 / 95%**。
- ボーナスは非搭載。通常ゲーム数到達型の天井/救済ARTは今回確認せず。
- 通常時にはHit/NGゾーン、低確/通常/高確/超高確等の状態概念があり、NG目後26GのNGゾーン解析を確認。ただしこれは通常天井ではない。
- `coreStatus=COMPLETE_CORE`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。機種名/IGT/型式系表記と設定変更・リセット・朝一・据え置き・電源OFF ON・Hit/NGゾーン・モード・状態・ガックンを組み替え、当時業界、P-WORLD、パチマガ解析INDEX/本文、K-Navi、回顧DBを横断したが、設定変更時にHit/NGゾーン・低確/通常/高確/超高確・RT/AT/ART状態をどこへ初期化するかを示す直接本文を確定できず。一般論から補完しない。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のHit/NG残G・内部状態・RT/AT/ART状態の引継ぎは直接資料未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のHit/NG残G・状態処理は直接資料未確定。
- `gameCounterReset`: **NOT_APPLICABLE_FOR_NORMAL_CEILING / ZONE_COUNTER_RESET_UNVERIFIED**。通常ゲーム数天井は確認なし。NGゾーン26G残Gの変更/据え置き/電断処理のみ未確定。
- `ceilingAfterReset`: **NOT_APPLICABLE**。通常天井・リセット短縮天井を確認せず。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ/朝一G数挙動の本機固有資料を確定できず。
- `numericResetData`: リセット専用天井=N/A、リセット時モード振分=未確定、公開朝一当選率/恩恵率=確認なし。
- `resetBehaviorQA=RESEARCHED_WITH_MODE_STATE_AND_POWER_CYCLE_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00002954/
- https://www.p-world.co.jp/machine/database/5444
- https://p-kn.com/slot/909/8150/
- https://pachinko.hatenablog.jp/entry/2009/02/air-master
- https://5goki.com/igt
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/51/igt_slot_51.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/51/d.php
- https://w.atwiki.jp/5gouki/pages/146.html

## 2009-02境界監査

- 2/2 `スペシャルオアシス` は既存342。
- 2月候補 `Wキャッツ` は月精度のみで具体日未確定。推測挿入しない。
- `バトルアスリーテス大運動会` は当時業界資料で3/1納品予定のため後回し。
- `エアマスター` は当時業界資料で最速2/15納品開始予定を確認し343として追加。
- `宇宙刑事ギャバン` は2/22納品開始予定を確認済み。
- `ラブゲッCHU` は当時業界資料で2/22納品開始予定を確認済み。
- `ダッシュ勝平` はパチビー2/24導入を確認済み。
- `スーパーリアル麻雀` はパチビー2/24導入を確認済み。
- `タコスロ7R` は当時業界資料で3/1納品開始予定のため2月機一覧表記だけで前倒ししない。
- 月単位候補 `甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ / Wキャッツ` は具体導入日を引き続き探索し、過去位置が確定した場合は漏れ防止のため遡及挿入する。
- `バケーション` は当時業界記事に2009年1月中旬納品開始予定まであるが、具体日未確定のため月内位置を推測しない。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 既存性能値を無駄にやり直さず、既存レコードを時系列走査して **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**からQAを継続する。
- 既にv0.7化済み機種は飛ばす。
- PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから残す。

## 次回再開地点

1. **LATEST_HANDOFF基準343件地点。2009-02-15 エアマスターまで接続済み。既存343件の再追加禁止。**
2. まず **2009-02-15同日群〜2/21** に具体日付き未処理機がないか監査する。
3. `Wキャッツ / 甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ` 等の月単位候補について、表記・型式・メーカーを変えて具体日を継続探索する。2/15以前が確定したものは正しい位置へ遡及挿入する。
4. 2/15〜21に未処理具体日機がなければ、既確認の **2009-02-22 `宇宙刑事ギャバン` / `ラブゲッCHU`** 同日群へ進む。
5. 発表会/内覧会日を導入日と誤認しない。納品・導入・稼働開始の具体根拠を優先する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 343 エアマスター: `a0f2c5d4a7be883beb00df254bf83ab19a15303a`
