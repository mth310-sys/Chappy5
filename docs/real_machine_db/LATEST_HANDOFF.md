# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **334件地点 / 2008-12-15 HAIBいちろうまで完了**。
- 今回、境界監査後に **335 `スロット代紋TAKE2`（エレコ）** を追加。
- **既存335件の再追加禁止。**

## 335. スロット代紋TAKE2

record:
- `docs/real_machine_db/machines/2008-12-22_slot-emblem-take2.md`

要点:
- machineName: **スロット代紋TAKE2**
- manufacturer: **エレコ**
- releaseDate: **2008-12-22**（ALL7導入予定）。グリーンべるとは2008-12-21納品開始予定のため、物流開始/ホール導入予定の定義差として分離。
- modelNumber: **エンブレムTAKE2-3**（P-WORLD型式名）
- generation: **5号機**
- systemType: **ボーナス+RT / CZ**。ユニバーサル公式「ボーナス+RT」、当時パチマガ「RT/CZ」を主根拠とする。後年5号機クロニクルのA+ART分類はCONFLICT。
- 設定構成は当時解析で **1 / 4 / 6 / H**。
- BIG合算 **1/364.09 → 1/229.15**、REG合算 **1/655.36 → 1/404.54**、ボーナス合算 **1/234.06 → 1/146.29**。
- 50枚ベース **36.77 / 36.75 / 36.73 / 36.71G**。
- メーカー発表PAYOUT（当時解析掲載） **97.8 / 101.0 / 108.1 / 115.0%**。公式最高出玉率115%とも整合。
- BIG約**312枚**、REG約**105枚**。100Gまたは2100G継続RT、RT中は当時業界記事で「コイン微増」。比較可能な枚/G純増は未確定。
- 後年5号機クロニクルは設定1/4/5/6、機械割98.0/102.0/107.1/114.2%、A+ART、BIG約252枚/REG約104枚としており、設定ラベル・機械割・ゲーム性・BIG枚数を **CONFLICT** 保存。平均/融合しない。
- `coreStatus=COMPLETE_CORE_EXCEPT_NUMERIC_RT_NET_INCREASE_WITH_CONFLICTS_PRESERVED`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。通常ゲーム数到達型天井を本機固有資料で確認できず。
- `ceilingAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。CZ/RT残状態を含む変更時処理を直接確定できず。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ等の機種固有判別を確定できず。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 機種名/型式/メーカー表記に設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・ガックンを組み替え、公式・業界記事・当時解析・旧DB・回顧資料を横断してからUNVERIFIED判定。一般的5号機挙動から補完しない。

主要出典（取得日 2026-09-02）:
- https://www.universal-777.com/product/slot/emblem_take2/
- https://www.universal-777.com/product/slot/2008/
- https://web-greenbelt.jp/00003896/
- https://www.all7.jp/plans/index/2008/12
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/75/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/75/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/75/a.php
- https://www.p-world.co.jp/machine/database/5362
- https://5goki.com/universal

## 2008-12境界監査

- ALL7 2008年12月一覧では12/15群の次の具体導入予定日は **12/22 スロット代紋TAKE2**。2008-12-16〜21に本線へ入る具体日未処理機は同一覧で確認できず。
- グリーンべるとの **12/21** は本機の「納品開始予定」であり、ALL7の **12/22導入予定** と定義を分離した。
- 月単位候補 **魔界城** は岡崎産業/業界記事で2008年12月機まで確認できるが、今回の再探索では具体ホール導入日を確定できず、月だけを理由に12/22以前へ推測挿入しない。
- 月単位候補 **シャドウハーツII** もユニバーサル公式で2008年12月発売まで確認。具体導入日が確定した場合のみ正しい時系列位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- 直前までに **大山鳴動漢みちスロ!（2006-09）** をv0.7化済み。
- 次は `2006-09_takenaka-naoto-taikoki.md`（竹中直人のパチスロ太閤記）。
- 新規本線を止めず、QAリレー時に時系列順で進める。

## 次回再開地点

1. **LATEST_HANDOFF基準335件地点 / 時系列本線は2008-12-22 スロット代紋TAKE2まで完了。**
2. 2008-12-23〜31の未処理具体日機種をメーカー公式・当時新台/納品記事・旧DBで最終監査する。
3. `魔界城` / `シャドウハーツII` 等の2008-12月単位候補は、具体導入日が確定した場合のみ時系列へ遡及挿入する。月情報だけで順序を推測しない。
4. 12月末を閉じられれば **2009年1月の最古未処理機**へ進む。
5. 遡及QAは **竹中直人のパチスロ太閤記（2006-09）** から再開。
6. PARTIAL/UNVERIFIEDやreset欠損は、表記揺れ・型式・メーカー・シリーズ名に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックンを組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで再探索する。一般論や別機種値から推測補完しない。

## コミット（今回）

- 335 スロット代紋TAKE2: `4f5964b2686b686019e7e85eeb0262ee62423501`
