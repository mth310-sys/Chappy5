# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md`、直近commitを再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 直前の進捗正本は192件目 `パチスロ湘南爆走族`。
- 2007-10-22同日群を継続監査し、main未登録だった `マジックモンスター2` を処理。
- **193件目として `マジックモンスター2`（オリンピア、2007-10-22ホール導入）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-10-22_magic-monster-2.md`
- coreStatus: `COMPLETE_CORE_WITH_CONFLICT`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `511d4a966897ba5ec429a4be10b355c1e291815a`

## 193. マジックモンスター2

- manufacturer: オリンピア
- formalModel: `UNVERIFIED`（P-WORLD現存DBも型式名欄空欄）
- releaseDate: `2007-10-22（ホール導入/ホールデビュー）`
- generation: 5号機初期
- systemType: ボーナス + CZ + 100G完走型RT「進級試験」
- coreStatus: `COMPLETE_CORE_WITH_CONFLICT`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- K-Naviの2007-09-26発表展示会記事でホール導入日 `2007-10-22予定` を確認。
- ITmedia Mobileの2007-10-23記事は、10月22日に同機のホールデビュー記念キャンペーンを開始したと報道。
- P-WORLDも2007年10月導入。

### 性能コア

- BIG合成: 設定1 `1/471.48` → 設定6 `1/352.34`。
- REG合成: 設定1 `1/1092.27` → 設定6 `1/819.20`。
- ボーナス合成: 約 `1/329` → `1/246`。
- 1000円あたりゲーム数: パチマガスロマガ実戦値 `41.66G`。設定別理論値ではないため observedRepresentative として保存。
- RT「進級試験」: 100G完走型、純増約 `+0.7枚/G`。A-SLOTの100G純増約70枚と後年回顧資料で整合。
- SBB平均約322枚、BIG平均約223枚、REG平均約108枚。P-WORLD/パチマガで一致。

### 機械割 CONFLICT

- パチマガスロマガ: `96.5 / 98.3 / 100.4 / 103.6 / 107.8 / 114.3%`
- PACNK / A-SLOT: `96.5 / 98.3 / 100.4 / 103.8 / 107.8 / 114.3%`
- 5号機クロニクル: `97.3 / 99.2 / 101.7 / 105.1 / 110.1 / 112.3%`
- 全系列を平均せず `CONFLICT` として保存。

### CZ / resetBehavior

- 全ボーナス終了後、RT終了後にCZへ突入。
- 通常状態ではCZ終了後120Gで次のCZへ入る周期構造。
- PACNK現存解析に **「設定変更後はチャンスゾーンからスタート」** と明記。
- 当時スロ板テンプレ保存にも「液晶は通常だが内部的にはCZ」とする記録があり、方向性を補助照合。
- settingChangeBehavior: `設定変更後は内部CZスタート = CONFIRMED_ANALYSIS`。
- carryOverBehavior: 据え置き時の周期残G/CZ/RT状態の厳密な引継ぎは `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時の周期/CZ/RT状態処理は `UNVERIFIED`。
- gameCounterReset: 通常のボーナス天井は非搭載。設定変更時は通常周期継続ではなくCZ始点へ切り替わる。
- ceilingAfterReset: `NOT_APPLICABLE / NO_CEILING`。主要差分は設定変更直後CZ開始。
- modeAfterReset: 朝一専用モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: 設定変更時内部CZスタート確認。RT中など特殊状態の処理は `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits: 通常周期120Gを待たずCZから開始する点が朝一の実質恩恵候補。リセット専用RT突入率は `NONE_CONFIRMED`。
- resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 朝一CZ挙動が変更推測材料になり得る当時記録あり。ただしガックン/初期出目/確定液晶差は `UNVERIFIED`。
- numericResetData: `設定変更後CZスタート`、通常時CZ周期 `120G`。リセット専用振り分け率/朝一当選率は `NONE_CONFIRMED`。

### 主要出典

- K-Navi 発表展示会: https://p-kn.com/topics/news/362/
- ITmedia Mobile: https://www.itmedia.co.jp/mobile/articles/0710/23/news078.html
- P-WORLD: https://www.p-world.co.jp/machine/database/4943
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/81/a.php
- パチマガスロマガ解析: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/81/h.php
- パチマガスロマガ1000円実戦値: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/81/c.php
- PACNK: https://pacnk.com/slot/2007/mag/
- PACNK設定/天井/変更時: https://pacnk.com/slot/tools/sh_mag.html
- A-SLOT: https://www.a-slot.com/SHOP/heiwa66.html
- 5号機クロニクル: https://5goki.com/heiwa-olympia
- スロ板blog 当時テンプレ保存: https://slbl.blog.shinobi.jp/テンプレ：ま行/マジックモンスター2

取得日: 2026-09-01

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン`、`花盛` は補完済み。
- 2006年7月 `大江戸漫遊記` はv0.7 resetBehavior遡及QA済み。
- `大江戸漫遊記` は既存性能status `PARTIAL` を維持し、resetBehaviorQA=`PARTIAL` を別管理。
- 次の最古resetBehavior欠損候補は **`電撃フランケン`（2006-07-24）**。現レコードにresetBehavior節がないことを確認済み。

## 10月本線監査メモ

- `哲也～雀聖と呼ばれた男～`: 10月は内覧会段階、ホールデビュー11月中旬予定。10月本線へ誤挿入しない。
- `元祖ハネスロ`: 10/21納品開始で191件目登録済み。
- `パチスロ湘南爆走族`: 10/22発売で192件目登録済み。
- `マジックモンスター2`: 10/22ホール導入で193件目登録済み。
- 同日順は資料精度で無理に時刻順を決めず、10/22群を漏れなく処理する。
- `CANスロ` は複数資料で2007/11のため11月キュー維持。
- 10/23〜10月末の未処理候補は、発売/納品日を公式・業界記事・P-WORLD月情報・当時業界史で再監査してから最古を採用する。

## 次回再開地点

1. **LATEST_HANDOFF基準193件地点から継続。**
2. 2007-10-22同日群に他の未登録5号機がないか最終監査し、なければ2007-10-23〜10月末へ進む。
3. 10月後半候補は、機種名だけで先行登録せず、発売/納品日を複数系統で確認して最古未処理を選ぶ。
4. resetBehavior遡及QAは **2006-07-24 `電撃フランケン`** から再開。既存性能コアstatusは不用意に崩さず、resetBehaviorQAを別管理する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
6. 競合値は平均せず `CONFLICT`。別機種・後継機仕様は流用しない。
