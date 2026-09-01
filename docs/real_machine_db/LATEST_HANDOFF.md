# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは221件地点（`インディ・ジョーンズS` 追加済み）。
- **`餓狼伝説スペシャル` を222件目として追加済み。**

## 222. 餓狼伝説スペシャル

- new record: `docs/real_machine_db/machines/2008-01-20_garou-densetsu-special.md`
- commit: `b75ee7100f475b5b4843b063079c82731b7092ee`
- manufacturer: SNKプレイモア
- releaseDate: `2008-01-20`
- generation: 5号機
- systemType: ボーナス + 差枚数管理ART「餓狼チャンス」 + AT「舞チャンス」
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入日の同定

- 当時グリーンべると/P-WORLD業界ニュースで「納品は2008年1月20日から」。
- 2008-01-25グリーンべるとで、関東1都6県は主基板部品の供給不足により約1週間の納期遅延、1/27から納品可能見通しと確認。
- K-Navi展示会記事の「2008年1月中旬予定」、5号機クロニクルの2008/1とも整合。
- releaseDateは全国トップ納品開始予定日 `2008-01-20` を採用し、関東の地域遅延を注記として分離。

### 性能コア

- BIG: `1/461.52 / 1/442.81 / 1/425.56 / 1/409.60 / 1/399.61 / 1/315.08`
- REG合算: `1/668.73 / 1/618.26 / 1/555.39 / 1/504.12 / 1/455.11 / 1/399.61`
- ボーナス合算: `1/273.07 / 1/258.02 / 1/240.94 / 1/225.99 / 1/212.78 / 1/176.17`
- 機械割（主系列）: `97.1 / 98.6 / 101.1 / 103.6 / 106.3 / 112.7%`
- 50枚ベース: 全設定共通 `49.37G/1000円`。
- BIG: 351枚超払い出し、純増目安約280枚。
- REG: 134枚超払い出し、純増目安約105枚。
- 全ボーナス後に差枚数管理ART「餓狼チャンス」。規定獲得差枚数まで3択ベルをナビし、終了役の3択チェリーを回避ナビ。最大1000枚。
- AT「舞チャンス」は3択チェリー/9枚役をナビし、ショート/ロングあり。通常時は少なくとも高確/低確モードが存在。
- ボーナス後333G・666Gで舞チャンス突入契機。ボーナス間999Gで特殊高確（天井）へ移行し、天井契機ATは次回ボーナスまで継続する資料あり。

### CONFLICT / 定義注意

- `CONFLICT_PAYOUT_ROUNDING_OR_METHOD`: K-Navi/Pacnk `97.1〜112.7%` と5号機クロニクル `97〜113%`。平均せず双方保持し、細かい数値を持つ前者を物差し主系列とする。
- `REG_TERMINOLOGY_NOTE`: 通常REG/レジェンドボーナスの分離表記とREG合算表記が資料で混在するため、内訳を誤統合しない。
- `REGIONAL_DELIVERY_DELAY_NOTE`: 全国トップ1/20、関東1都6県は約1週間遅延。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: `EXISTS_BUT_RESET_RULE_UNVERIFIED`。333/666/999G契機自体は確定。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の再起算/持越し、短縮天井は未確定。
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH`。高低モードは存在するが変更後初期振分は未確定。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。ART/AT中の設定変更・据え置き・電断処理は未確定。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: `PARTIAL_SOURCE_POINTER_UNRESOLVED`。K-Naviに「設定変更判別も!?」項目の存在は確認できたが具体本文を復元できず、判別手順は推測しない。
- numericResetData: `NONE_CONFIRMED`。

### 主要出典

- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2566/greenbelt
- グリーンべると（関東納期遅延）: https://web-greenbelt.jp/00003397/
- K-Navi機種情報: https://p-kn.com/slot/743/
- K-Navi発表会: https://p-kn.com/topics/exhibition/217/
- Pacnk: https://pacnk.com/slot/tools/sh_garoudensetsusp.html
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/1044/1/16245
- 5号機クロニクル: https://5goki.com/snkplaymore
- P-WORLD: https://www.p-world.co.jp/machine/database/5009

取得日: 2026-09-01

## resetBehavior 遡及QA

### 逮捕しちゃうぞ（2006-08-28）補完済み

- record: `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md`
- commit: `42e7e29f4581af7a7b841317ea27f01092115bb8`
- 既存性能値・既存CONFLICTは変更せず、v0.7 resetBehaviorだけ別管理で追加。
- ループBIG後に次回ボーナスまで継続する無限RT「特売タイム」、RT純増約0.3枚/Gは既存複数資料で維持。
- 設定変更/据え置き/電源OFF→ON時の無限RT内部状態、ガックン/初期出目等の変更判別は、検索語・資料系統を変えて再探索しても本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時規定ゲーム数天井、リセット短縮天井、朝一専用モード/恩恵/公開数値は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。
- 一般的な5号機のリセット挙動、他IGT機、家庭用実機販売時の動作説明は本機固有根拠として流用していない。

### 次の遡及QA対象

- `ブリチカ-30（2006-09）` の現行レコードを再読し、resetBehavior節がまだないことを確認済み。
- next record: `docs/real_machine_db/machines/2006-09_burichika-30.md`
- REG後32G RT「ブリチカチャンス」を持つため、設定変更/据え置き/電断時のRT残G・状態処理を最優先で探索する。

## 2008年1月候補監査

- 220: `銀河鉄道物語`。再追加禁止。
- 221: `インディ・ジョーンズS`。再追加禁止。
- 222: `餓狼伝説スペシャル`。再追加禁止。
- `まぁさん`: 4Gamer掲載のサミーネットワークス発表文で `2008-01-21` 実機導入同時配信。旧DBの2007-12表記は `CONFLICT_DATE_MONTH` 候補として維持。**次回最優先候補。**
- その後は `島育ち / ウルトラキューティーハニー3 / めんそーれ2` 等を具体導入日で再比較し、未処理最古順に前進する。

## 重複防止

- 217: `バーチャファイターF`。
- 218: `学習パチスロ 理科`。
- 219: `パンドラ`。
- 220: `銀河鉄道物語`。
- 221: `インディ・ジョーンズS`。
- 222: `餓狼伝説スペシャル`。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準222件地点から継続。**
2. **`まぁさん（2008-01-21）` を次の最有力未処理機種として正式収集。** 2007-12表記資料との日付競合は平均せず `CONFLICT_DATE_MONTH` で扱う。
3. 1/20同日〜1/21より前の未処理機がないか最終監査し、見つかれば漏れ防止で先に処理する。
4. resetBehavior遡及QAは **`ブリチカ-30（2006-09）`** から再開。
5. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。
