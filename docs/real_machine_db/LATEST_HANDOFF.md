# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **335件地点 / 2008-12-22 スロット代紋TAKE2まで完了**。
- 2008-12-23〜31をALL7月間一覧、当時業界記事、旧DB・回顧資料で再監査。具体導入日が確認できる未処理パチスロを確定できず、12月末を一旦閉じて2009年1月へ進行。
- 今回 **336 `キング・コング`（ビスティ）** を追加。
- **既存336件の再追加禁止。**

## 336. キング・コング

record:
- `docs/real_machine_db/machines/2009-01-12_king-kong.md`

要点:
- machineName: **キング・コング**
- manufacturer: **ビスティ**
- releaseDate: **2009-01-12**。2008-12-16グリーンべるとが「年明け1月12日より納品開始予定」と明記。SANKYOオンライン博物館は導入年月2009.01。
- modelNumber: **キング・コングZ2**
- approvalNumber: **8S0806**（P-WORLD）
- generation: **5号機**
- systemType: **ボーナス+ART / パンク回避型ART**
- 設定構成: **1 / 4 / 6 / H**
- 機械割: **96.0 / 99.3 / 104.8 / 110.1%**。別資料95.97/99.25/104.80/110.05%は丸め精度差として保持。
- BIG合算 **1/1638.4 → 1/819.2**、CB合算 **1/102.4 → 1/95.26**、総ボーナス合算 **1/96.4 → 1/85.3**。
- BIG約**224枚**、CB最大**56枚**。
- ART純増約 **+0.7枚/G**。
- `スーパーコングタイム` はSUPER BIG後に入り、**509G**の規定継続。509Gは通常時天井ではなくART継続G数として分離。
- 50枚ベースは表記揺れ・型式・「50枚/1000円/ベース/コイン持ち」で再探索後も直接値未回収のため `UNVERIFIED_AFTER_RESEARCH`。
- `coreStatus=PARTIAL_CORE_BASE_GAMES_UNVERIFIED`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。通常時ゲーム数天井を本機固有資料で確認できず。509GはART継続G数なので天井に流用しない。
- `ceilingAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- パチマガスロマガ旧ページに「攻め時・ヤメ時・設定変更時」の専用項目が存在することまでは確認したが本文を回収できず。機種名/型式/メーカーに設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックンを組み替え、P-WORLD、K-Navi、旧解析、回顧DBまで横断してからUNVERIFIED判定。一般的5号機挙動から補完しない。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00003955/
- https://www.sankyo-fever.jp/collection/869/
- https://www.p-world.co.jp/machine/database/5411
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/14/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/14/bisty_slot_14.php
- https://crankyseven.com/sp/kingcong-pc.htm
- https://5goki.com/bisty
- https://pachinko.hatenablog.jp/entry/2009/01/king-kong
- https://p-kn.com/slot/905/

## 2008-12末〜2009-01境界監査

- ALL7 2008年12月一覧で最後に確認できるパチスロ具体導入予定は **12/22 スロット代紋TAKE2**。12/23〜31を当時記事・検索語変更で追加監査したが、具体日付き未処理パチスロを確定できなかった。
- 月単位候補 **魔界城** / **シャドウハーツII** は2008年12月機まで確認済みだが、具体導入日未確定。具体日が判明した場合のみ正しい位置へ遡及挿入する。
- 2009年1月の月単位候補として `がんばれ満月姫! / アイムマジック / キング・コング / バケーション / パチスロ「KELOT」 / パチスロ秘密戦隊ゴレンジャー / マキシマムインパクト / 南国育ち30 / 忍魂 / 悪魔城ドラキュラ / 甘ぴかっ` を抽出。
- 現時点で具体日を強く確認できた最古候補は **1/12 キング・コング**。ただし1/1〜11または1/12同日群の未処理機が当時資料から判明した場合は漏れ防止で遡及追加する。
- **南国育ち30** はグリーンべるとで **2009-01-18納品**を確認済み。1/12同日群・1/13〜17候補を閉じた後の有力次候補。

## resetBehavior遡及QA進捗

- 直前までに **大山鳴動漢みちスロ!（2006-09）** をv0.7化済み。
- 次は `2006-09_takenaka-naoto-taikoki.md`（竹中直人のパチスロ太閤記）。
- 新規本線を止めず、QAリレー時に時系列順で進める。

## 次回再開地点

1. **LATEST_HANDOFF基準336件地点 / 時系列本線は2009-01-12 キング・コングまで完了。**
2. まず **2009-01-01〜11および1/12同日群**に具体日付き未処理機がないか、月単位候補11機種をメーカー公式・当時新台/納品記事・P-WORLD/ALL7・旧解析で再監査する。
3. 次に **1/13〜17** を閉じる。未処理具体日機がなければ **1/18 南国育ち30** を本線候補とする。
4. `がんばれ満月姫! / アイムマジック / バケーション / KELOT / 秘密戦隊ゴレンジャー / マキシマムインパクト / 忍魂 / 悪魔城ドラキュラ / 甘ぴかっ` は具体導入日を確定してから時系列へ入れる。月情報だけで順序を推測しない。
5. `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。
6. 遡及QAは **竹中直人のパチスロ太閤記（2006-09）** から再開。
7. PARTIAL/UNVERIFIEDやreset欠損は、表記揺れ・型式・メーカー・シリーズ名に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックンを組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで再探索する。一般論や別機種値から推測補完しない。

## コミット（今回）

- 336 キング・コング: `fc199d8957684ba43fe617184b1400489dd8d9c2`
